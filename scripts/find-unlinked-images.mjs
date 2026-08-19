// This script discovers all images across the documentation and lists those
// which are never referenced. Use this script for some clean up after you are
// done changing and editing a translation.
import { Dirent, promises as fs } from "fs"
import path from "path"
import readline from "readline"

const REPOSITORY_ROOT = path.dirname(import.meta.dirname)

/**
 * Recursively reads in the provided `startPath` and returns a list of all
 * files and folders within it, providing absolute paths.
 *
 * @param   {string}    startPath  The start directory
 *
 * @return  {string[]}             The contents
 */
async function walkDir (startPath) {
  const filesAndFolders = []
  for (const dirent of await fs.readdir(startPath, { withFileTypes: true })) {
    const absPath = path.join(dirent.parentPath, dirent.name)
    filesAndFolders.push(absPath)
    if (dirent.isDirectory()) {
      filesAndFolders.push(...await walkDir(absPath))
    }
  }
  return filesAndFolders
}

/**
 * Takes the absolute path (!) to a Markdown file and returns a list of all
 * images linked within this file, providing their absolute paths.
 *
 * @param   {string}    mdFilePath  The absolute path to the Markdown file
 *
 * @return  {string[]}              The list of (absolute) image paths.
 */
async function extractImageLinksFromMarkdownFile (mdFilePath) {
  const imgLinks = []

  const contents = await fs.readFile(mdFilePath, "utf-8")
  const markdownDir = path.dirname(mdFilePath)

  // Within the documentation, we only use simple image links, and not reference
  // style links, so we can save ourselves a lot of work.
  for (const match of contents.matchAll(/\!\[.+\]\((.+)\)/g)) {
    const res = path.resolve(markdownDir, match[1])
    imgLinks.push(res)
  }

  return [...new Set(imgLinks)]
}

async function findUnlinkedImages () {
  const startPath = path.join(REPOSITORY_ROOT, "docs")

  console.log(`Scanning directory ${startPath}...`)

  // First, let's list all Markdown files in the docs folder, and all images.
  const allPaths = await walkDir(startPath)
  console.log(`Found ${allPaths.length} files and folders in directory.`)

  // Next, filter out all Markdown files and all image files
  const imgFiles = allPaths.filter(p => /\.(?:jpe?g|png|bmp|gif|tiff|svg)$/i.test(p))
  const mdFiles = allPaths.filter(p => p.toLowerCase().endsWith(".md"))
  console.log(`Found ${mdFiles.length} Markdown documents and ${imgFiles.length} image files.`)

  // Now, read in the Markdown files one by one, extract any image links, and resolve
  // the paths accordingly so that we can check which image files are being linked to.
  console.log("Extracting image links...")
  let allImageLinks = []
  for (const p of mdFiles) {
    allImageLinks.push(...await extractImageLinksFromMarkdownFile(p))
  }

  // Make unique
  allImageLinks = [...new Set(allImageLinks)]
  console.log(`Found ${allImageLinks.length} unique image files being referenced by the Markdown files.`)

  const orphanedImages = []
  for (const imagePath of imgFiles) {
    if (!allImageLinks.includes(imagePath)) {
      orphanedImages.push(imagePath)
    }
  }

  console.log(`There are ${orphanedImages.length} orphaned images that are not referenced by any Markdown file.`)

  const shouldDelete = await new Promise((resolve, reject) => {
    const rl = readline.createInterface({ input: process.stdin, output: process.stdout })
    rl.on("error", err => reject(err))
    rl.on("SIGINT", () => { reject(new Error("Received SIGINT")) })

    rl.question(`Would you like to remove these ${orphanedImages.length} images now? [Y/n]`, answer => {
      resolve(/y(?:es)?/i.test(answer))
      rl.close()
    })
  })

  if (!shouldDelete) {
    console.log("Not deleting files.")
  } else {
    for (const imagePath of orphanedImages) {
      console.log(`Deleting ${imagePath}...`)
      await fs.rm(imagePath)
    }
    console.log(`Deleted ${orphanedImages.length} orphaned images.`)
  }
}

// Run
findUnlinkedImages()
  .then(() => {
    console.log("Done.")
  })
  .catch(err => {
    console.error(err)
    console.log("Could not find unlinked images.")
  })