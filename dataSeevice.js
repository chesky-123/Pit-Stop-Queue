import { readFile } from "fs/promises";
import { writeFile } from "fs/promises";


const FILE_URL = "https://server-for-test-week-13.onrender.com/api/race"
const FILE_PATH = "./raseData.json"

async function getRaseData(path) {
    try {
        const read = await fetch(path)
            return read.json();
    } catch (e) {
        return e
    }
}

async function writeToJson() {
    try{
        const race = await getRaseData(FILE_URL);
        const raceToStr = JSON.stringify(race)
        await writeFile(FILE_PATH,raceToStr,"utf-8")
        // console.log("file write successfuly");
        
    }catch(e){
        return e
    }
}

export async function readFromJson() {
    try{
        const raceData = await readFile(FILE_PATH,"utf-8");
        const raceDataInJson = JSON.parse(raceData);
        return raceDataInJson
    }catch(e){
        return e
    }
}


















