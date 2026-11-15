const fs = require('fs');

const files = [
    'a1.txt',
    'a2.txt',
    'a3.txt'
];

let arr=[];
let done=false;
let howmanytotake=1;
let answerarr=[];
let j=0;
let start=0;
while(!done)
{
    done=true;
    for(let i=0;i<files.length;i++)
    {
        arr=fs.readFileSync(C:/Users/fadis/OneDrive/Desktop/nodejs-homework/NodeJSMain/HomeWork6/input/${files[i]},utf-8).split('\n');
        if(start<arr.length)
            done=false;
        for(j=start;j<start+howmanytotake&&j<arr.length;j++)
        {
            answerarr.push(arr[j]);
        }
    }
        start+=howmanytotake;
        howmanytotake++;
}
fs.writeFileSync(C:/Users/fadis/OneDrive/Desktop/nodejs-homework/NodeJSMain/HomeWork6/input/output.txt,answerarr.join('\n'));