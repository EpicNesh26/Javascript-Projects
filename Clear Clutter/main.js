// You have to write a Node.js program to clear clutter inside of a directory and organize the contents of that directory into different folders 

// for Example :
// these files become:

// 1. name.jpg
// 2. name.png
// 3. this.pdf
// 4. harry.zip
// 5. rohan.zip
// 6. cat.jpg

// this:

// jpg/name.jpg, jpg/cat.jpg
// name.png, png/name.png
// zip/harry.zip, zip/Rohan.zip
// this.pdf, pdf/this.pdf 









// ATTEMPT 1:


// const fs = require('fs');
// const path = require('path');

// const directoryPath = 'C:\Coding\JS Projects\Clear Clutter\files'; // Replace with your directory path

// fs.readdir(directoryPath, (err, files) => {
//     if (err) {
//         console.error('Error reading directory:', err);
//         return;

//     }
// })
// const fileList = files.filter(file => fs.statSync(path.join(directoryPath, file)).isFile());

// // Create folders for each unique file extension
// const extensions = new Set(fileList.map(file => path.extname(file).toLowerCase()));
// extensions.forEach(ext => {
//     const folderName = ext.substring(1); // Remove the leading dot (e.g., ".jpg" -> "jpg")
//     const folderPath = path.join(directoryPath, folderName);

//     if (!fs.existsSync(folderPath)) {
//         fs.mkdirSync(folderPath);
//     }
// });

// // Move each file into the corresponding folder
// fileList.forEach(file => {
//     const ext = path.extname(file).toLowerCase();
//     const folderName = ext.substring(1); // Remove the leading dot
//     const sourcePath = path.join(directoryPath, file);
//     const destPath = path.join(directoryPath, folderName, file);

//     fs.rename(sourcePath, destPath, err => {
//         if (err) {
//             console.error(`Error moving file ${file} to ${folderName} folder:`, err);
//         } else {
//             console.log(`Moved ${file} to ${folderName} folder`);
//         }
//     });
// });



// ATTEMPT 2


// const fs = require('fs');
import fs from "fs/promises"
import fsn from "fs"
import path from "path"
// const path = require('path');

const basepath = "C:\\Coding\\JS Projects\\Clear Clutter"
let files = await fs.readdir(basepath)


for (const item of files) {
    console.log("Running for ", item)
    let ext = item.split(".")[item.split(".").length - 1]
    if (ext != "js" && ext != "json" && item.split(".").length > 1) {
        if (fsn.existsSync(path.join(basepath, ext))) {
            // Move the file to the directory if its not a js or json file
            fs.rename(path.join(basepath, item), path.join(basepath, ext, item))
        }
        else {
            fs.mkdir(ext)
            fs.rename(path.join(basepath, item), path.join(basepath, ext, item))
        }
        // console.log(item)
    }
}


// console.log(files)

