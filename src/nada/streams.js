import fs from "node:fs"
const reedstream = fs.createReadStream("text.txt");
reedstream.on ("data",(chunck) =>{
    console.log(chunck)
})
reedstream.on("end",() =>{
    console.log("success")
})