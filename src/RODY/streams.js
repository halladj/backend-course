import fs from "node:fs"

const readStearm = fs.createReadStream("text.txt");
readStearm.on("data" , (chunck)=>{
console.log(chunck)
})

readStearm.on("end" , ()=>{
    console.log("success")
})
