//Mariam Nbrawi
//Kamil Nassar

const fs = require("fs");
const path = require("path");

const file = ["a1.txt", "a2.txt", "a3.txt"];

const fileLines = file.map((fileName) => {
  const filePath = path.join(__dirname, fileName);
  const content = fs.readFileSync(filePath, "utf-8");
  return content.split(/\r?\n/);
});

let resultText = "";
let lineIndices = [0, 0, 0];
let round = 1;
let keepGoing = true;

while (keepGoing) {
  let anyFileStillHasLines = false;

  for (let i = 0; i < fileLines.length; i++) {
    let linesCopied = 0;

    while (linesCopied < round && lineIndices[i] < fileLines[i].length) {
      resultText += fileLines[i][lineIndices[i]] + "\n";
      lineIndices[i]++;
      linesCopied++;
    }

    if (lineIndices[i] < fileLines[i].length) {
      anyFileStillHasLines = true;
    }
  }

  if (!anyFileStillHasLines) {
    keepGoing = false;
  }

  round++;
}

fs.writeFileSync(path.join(__dirname, "test.txt"), resultText);
console.log("Done! File created successfully.");