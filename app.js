import { log } from "console";
import mng from "./service.js";



console.log("Pit Stop Queue - Race Team Management System");
console.log("Race engineer: Let's check the current queue status on the pit wall");

console.log("Loading queue data...");


console.log(`================  PIT STOP QUEUE `);
console.log(`Race; ${await mng.getRaseName()}`);
console.log(`Lap: ${await mng.getLap()}`);
console.log(`Pit stops completed: ${await mng.pitStopsCompleted()}`);
console.log("Cars waiting for pit stop:");
for (const car of await mng.getCarsWaitingForPitStop()){
    if (car){
        console.log(`- Car # ${car.num} | Driver: ${car.name}`);
        
    }
}





















