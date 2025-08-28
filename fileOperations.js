import * as fs from "fs";

//Handles JSON data. Returns nonJSON object
//JSON stringify, parse,

function fileExistsSync(pathname) {
  //Sychronously checks if file exists
  return fs.existsSync(pathname);
}

function readFileSync(pathname) {
  //Synchronously read file and return file data
  const jsonData = fs.readFileSync(pathname, "utf8");
  if (!jsonData) return 0;
  const data = JSON.parse(jsonData);
  return data;
}

function writeFile(pathname, data) {
  //Asynchronously write file
  const jsonData = JSON.stringify(data, null, 2);

  fs.writeFile(pathname, jsonData, (err) => {
    if (err) console.error(`Error writing JSON file`, err);
  });
}

export { fileExistsSync, readFileSync, writeFile };
