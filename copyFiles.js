const fs = require("fs");
const path = require("path");
const { promisify } = require("util");

const readdir = promisify(fs.readdir);
const stat = promisify(fs.stat);
const copyFile = promisify(fs.copyFile);

async function copyFiles(sourceDir, destinationDir, fileExtensions) {
  try {
    // Create the destinationDir if it does not exist.
    if (!fs.existsSync(destinationDir)) {
      fs.mkdirSync(destinationDir);
    }

    if (!fs.existsSync(sourceDir)) {
      throw new Error(`Directory not found: ${sourceDir}`);
    }

    // Read the contents of the source directory
    const files = await readdir(sourceDir);

    // find all the files with the specified extensions.
    const filteredFiles = files.filter((file) => {
      const ext = path.extname(file).toLowerCase();
      return fileExtensions.includes(ext);
    });

    // Copy filtered files to the destination directory
    for (const file of filteredFiles) {
      const sourceFilePath = path.join(sourceDir, file);
      const copiedFilePath = path.join(destinationDir, file);

      // Check if the file is a directory
      const stats = await stat(sourceFilePath);
      if (stats.isDirectory()) {
        // Recursively copy files from subdirectories
        await copyFiles(sourceFilePath, copiedFilePath, fileExtensions);
      } else {
        // Copy the file
        await copyFile(sourceFilePath, copiedFilePath);
        console.log(`Copied: ${sourceFilePath} to ${copiedFilePath}`);
      }
    }

    console.log("Files copied successfully!");
  } catch (error) {
    console.error("Error:", error.message);
  }
}

// Example usage
const sourceDirectory = "D:/University/S231/SWE363/exercises/New folder";
const destinationDirectory = "D:/University/S231/SWE363/exercises/test";
const allowedFileExtensions = [".txt", ".jpg", ".png", ".jfif"];

copyFiles(sourceDirectory, destinationDirectory, allowedFileExtensions);
