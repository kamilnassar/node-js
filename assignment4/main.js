const { table } = require("console");
const fs = require("fs");
const path = require("path");

const dirPath = path.join(__dirname, "/Text");

//creating path array of all the paths.
let pathArr =[];
let newPath = path.join(dirPath, `a${1}.txt`);
pathArr = newPath;
for (let i = 2; i <= 10; i++) {
  let newPath = path.join(dirPath, `a${i}.txt`);
  pathArr = `${pathArr}\r\n${newPath}`;
}

let newPathArr = pathArr.split("\r\n");

for (let k = 0; k < newPathArr.length; k++) {
  let textIn = fs.readFileSync(newPathArr[k], "utf-8");
  let brr = textIn.split("\r\n");
  for (let a = 1; a <= k + 1; a++) {
    if (brr[a - 1] != undefined) console.log(brr[a - 1]);
  }
};


