import * as fs from "node:fs"

import { promises as fspromises } from "node:fs";

const FILE_NAME = "text.txt"

//try{
    //await fspromises.writeFile("text.txt", "my name is nada ");
   // console.log("written succefully");
   // const data = await fspromises.readFile(FILE_NAME, "UTF-8")
    //console.log ("result:",data)

   // await fspromises.access(FILE_NAME)
   // console.log ("the file exists")

    //fs.mkdir("folder" , (err)=> {
       // if(err){
        //   return console.error(err)
      //  }
       // console.log ("folder created succefully")
   // })


   // fs.rm("folder" , {recursive : true}, (err) => {
      // if(err){
          // return console.error(err)
      // }
       // console.log ("folder deleted")
   // })
     try {
     
        const data = await  fspromises.readFile(FILE_NAME, "UTF-8");
        
     const uppercase  =data.toUpperCase();
     console.log("data:"+uppercase+"type data:"+typeof (uppercase))
      await  fspromises.writefile(FILE_NAME, uppercase);
     console.log ("success");
     
   

}catch(err){
    console.log("error:" +err);
}
