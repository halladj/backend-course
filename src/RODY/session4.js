import * as fs from "node:fs"
import { promises as fsPromises } from "node:fs";
const FILE_NAME ="text.txt";


try{
  // await fsPromises.writeFile(FILE_NAME,"New sentence");
 //  console.log("Written successfully");
  // const data = await fsPromises.readFile(FILE_NAME, "utf-8")
  // console.log("result:",data)
 // await fsPromises.access(FILE_NAME)
 // console.log("the file exists")
 //
// fs.rm("folder",{recursive: true},(err) => {
   // if (err){
    //    return console.error(err)
   // }
   // console.log("folder deleted")
 //})
 const data = await fsPromises.readFile(FILE_NAME, "utf-8")
 const uppercaseData =data.toUpperCase()
console.log("data :"+uppercaseData+"type:"+typeof(uppercaseData)) 
await fsPromises.writeFile(FILE_NAME,uppercaseData) 
console.log("succes")
}catch(err){
    console.log("error"+ err);
}
