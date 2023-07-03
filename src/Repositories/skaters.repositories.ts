import { Skaters } from "protocols";
import { connection } from "../database/database";

// const skaters: Skaters[] = [
//     { info: { name: "Will", age: 23 }, schedule: { day: "saturday", hour: 15 } },
//     { info: { name: "Bea", age: 20 }, schedule: { day: "saturday", hour: 16 } },
//     { info: { name: "Carol", age: 19 }, schedule: { day: "saturday", hour: 16 } },
//     { info: { name: "Gessy", age: 23 }, schedule: { day: "saturday", hour: 16 } }
// ]
export async function createSkater(skater: Skaters) {
    return await connection.query(`INSERT INTO skaters VALUES ($1,$2)`,
        [skater.info, skater.schedule])


}

export async function getSkaters() {
    const skaters = await connection.query(`SELECT * FROM skaters`)
    return skaters.rows;
}