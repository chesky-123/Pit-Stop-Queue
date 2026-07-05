import fs from "fs/promises";
import { readFromJson } from "./dataSeevice.js"

const FILE_PATH = "./raseData.json"

async function getRaseDataFromJson(filePath = FILE_PATH) {
    try {
        const raseData = readFromJson();
        return raseData
    } catch (e) {
        return e
    }
}


async function getRaseName() {
    try {
        const rase = await readFromJson()
        const raseName = rase.raceName
        return raseName
    } catch (e) {
        return e
    }
}

async function getLap() {
    try {
        const race = await readFromJson();
        const corentLap = race.currentLap
        const totalLaps = race.totalLaps
        const lap = corentLap + "/" + totalLaps
        return lap
    } catch (e) {
        return e
    }
}

async function getTotalCars() {
    try {
        const race = await readFromJson();
        const totalCars = race.cars.length;
        return totalCars;
    } catch (e) {
        return e
    }
}

async function pitStopsCompleted() {
    try {
        const race = await readFromJson();
        const sumComplatedCars = race.cars.filter(r => r.status === "done").reduce((acc, r) => {
            return acc + 1
        }
            , 0)
        return sumComplatedCars
    } catch (e) {
        return e
    }
};

async function getCarsWaitingForPitStop() {
    try {
        const race = await readFromJson()
        const carsWaiting = race.cars.map((car) => {
            if (car.status === "waiting") {
                return {name:car.driverName,num:car.carNumber}
            }
        })
        return carsWaiting
    } catch (e) {
        return e
    }
}




export default {
    getLap,
    getRaseName,
    getTotalCars,
    pitStopsCompleted,
    getCarsWaitingForPitStop
}

console.log(await getCarsWaitingForPitStop());
