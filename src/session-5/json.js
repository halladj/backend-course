import { promises as fs } from 'fs';


async function saveJSON(object) {
    const stringData = JSON.stringify(object, null, 2)
    try {
        await fs.writeFile("data.json", stringData)
    } catch (error) {
        console.log(error)
    }
}

async function readJSON(filename) {
    const filecontent = await fs.readFile(filename)
    const jsonData = JSON.parse(filecontent)
    return jsonData
}

const data = {
    "id": 2314,
    "fullname": "hamza",
    "order_id":3,
    "address": "Constantine, Algeria"
}

// saveJSON(data)
console.log(await readJSON("data.json"))