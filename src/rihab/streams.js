import fs from "node:fs"

const readStream=fs.createReadStream("text.txt")
readStream.on("data",(chunck)=>{
    console.log(chunck)
})
readStream.on("end",()=>{
    console.log("success")
})