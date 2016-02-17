//We need to use require to use the modules- process, filesystem, path and colors 

var DEBUG = false; //make it true while debugging
var process = require("process");
var fs = require('fs');
var path = require('path');
var colors = require("colors");

//Obtain the location of the logs folder from the 3rd parameter
// passed into the command line statement
var logsFolder = process.argv[2];

//console.log(logsFolder);  //if DEBUG is true make it log(logsFolder to debug the errors)

//Creates a folder named “processed” inside the “logs” folder

    //var processedFolder = path.join(logFolder, "/processed");
    //fs.mkdirSync(processedFolder)
    //var processedFolder2 = logsFolder + "/processed";

//ensures that relative paths are resolved to absolute paths
var absPath = path.resolve(logsFolder);

var processedFolder = path.join(logsFolder, "processed");
fs.mkdirSync(processedFolder);

//Creates a folder for each year prefix
//on the log files so that the logs can be sorted by year

var folder2014 = path.join(processedFolder, "2014");
fs.mkdirSync(folder2014);

var folder2015 = path.join(processedFolder, "2015");
fs.mkdirSync(folder2015);

var folder2016 = path.join(processedFolder, "2016");
fs.mkdirSync(folder2016);

    //fs.mkdirSync(logsFolder + "/processed/2014");
    //fs.mkdirSync(logsFolder + "/processed/2015");
    //fs.mkdirSync(logsFolder + "/processed/2016");

//reads the content of the directory, returns an array of filenames in the raw directory
var rawFilesArray = fs.readdirSync(logsFolder + "/raw");

//Sort the log files into the folders that match the year in their filename
for(var i = 0; i < rawFilesArray.length; i++) {
    
    if ( rawFilesArray[i].startsWith("2014") ) {
        var oldPath = "logs/raw/" + rawFilesArray[i];
        var newPath = "logs/processed/2014/" + rawFilesArray[i];
        fs.renameSync(oldPath, newPath );
        //fs.renameSync("logs/raw/" + rawFilesArray[i], "logs/processed/2014/" + rawFilesArray[i]);
    }
    else if( rawFilesArray[i].startsWith("2015") ) {
        var oldPath = "logs/raw/" + rawFilesArray[i];
        var newPath = "logs/processed/2015/" + rawFilesArray[i];
         fs.renameSync(oldPath, newPath );
        //fs.renameSync("logs/raw/" + rawFilesArray[i], "logs/processed/2015/" + rawFilesArray[i]);
    }
    else if( rawFilesArray[i].startsWith("2016") ) {
        var oldPath = "logs/raw/" + rawFilesArray[i];
        var newPath = "logs/processed/2016/" + rawFilesArray[i];
        fs.renameSync(oldPath, newPath );
        //fs.renameSync("logs/raw/" + rawFilesArray[i], "logs/processed/2016/" + rawFilesArray[i]);
    }
}

//count the total number of files that were sorted into each folder
var fileArray2014 = fs.readdirSync("./logs/processed/2014");
var fileArray2015 = fs.readdirSync("./logs/processed/2015");
var fileArray2016 = fs.readdirSync("./logs/processed/2016");

//Color the log messages and write to the console the number of files in each folder
console.log(colors.green("sorting files..."));
console.log(colors.blue("moved [" + fileArray2014.length + "] logs into processed\\2014"));
console.log(colors.blue("moved [" + fileArray2015.length + "] logs into processed\\2015"));
console.log(colors.blue("moved [" + fileArray2016.length + "] logs into processed\\2016"));
console.log(colors.green("...finished!"));

function log(msg) {
    if(DEBUG) {
        console.log(msg);
    }
}