import { Console } from "node:console";
import * as fs from "node:fs";
import { promises as fsPromisses } from "node:fs";
const FILE_NAME = "text.txt";
try{
    //await fsPromisses.writeFile( FILE_NAME , "new sentence")
    //console.log("written successful")
    //const data= await fsPromisses.readFile(FILE_NAME , "utf-8")
    //console.log("result: ",data)
    //await fsPromisses.access(FILE_NAME)
    //console.log("the file existe")
    
    fs.mkdir("folder",(err)=>{
        //if (err){
            //return console.error(err)
        //}
        //console.log("folder created succeful")
    //})
    fs.rm("folder",{recursive: true},(err)=>{
        if (err){
         return console.error(err)
        }
        console.log("folder deleted succeful")
    })
    })
}catch(err){
    console.error("error"+ err);
}
