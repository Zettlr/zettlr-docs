# Paths and links

A relative path describes the location of a file relative to the current (working) directory. 
An absolute path describes the location from the root directory.

Relative path allows to make yours personal library more portable and prevent breakage of the references if you will move it to the new folder/drive or system.

Absolute path example - `/home/user/Zettlr/welcome.md`  
Relative path example - `./welcome.md`


If we have a folder `/Zettlr/Test` and `test.md` file inside of it and still want to have a link to the `welcome.md`, we need to tell in our path to go outside of the current directory, using this construction `../`.  
So our path wiil be - `[welcome](../welcome.md)`.  
You need to repeat `../` every time when you're going upper from the current working directory.   
For example, lets create `Test2` folder inside of a `Test` folder, and then create `test2.md` file inside of it.   
So our relative path will be - `[welcome](../../welcome.md)`
