#!/usr/bin/env bash

# Re-builds the full page

# First retrieve all available docs
cd "$(dirname $0)"
cd ..
cd ./docs
docs=$(ls -d *)
cd .. # Switch back to root directory

for d in $docs
do
  # Build each available language
  mkdocs build --config-file ./config/$d.yml
done

# Add the necessary additional files to the build directory:
cp ./assets/index.html ./build
cp ./assets/404.html ./build
cp ./assets/logo.png ./build
cp ./assets/robots.txt ./build
cp ./assets/.htaccess ./build
