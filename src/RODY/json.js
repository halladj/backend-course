import {promises as fs }from 'fs';

async function saveJSON(object){
    const stringData = JSON.stringify(object,null,2)
    try {
     fs.writeFile("data.json",stringData)   
    } catch (error) {
        console.log(error)
    }
}


async function readJSON (file){
    const filecontent = await fs.readFile(file)
    const jsonData =  JSON.parse(filecontent)
return jsonData
}



const data = {
    "id":2314,
    "fulname":"hamza",
    "order_id":3,
    "adress": "constantine,Algérer",
}
saveJSON(data)
console.log(await readJSON("data.json"))
