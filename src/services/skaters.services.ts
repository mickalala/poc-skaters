import { Skaters } from "../protocols";
import * as skaterRepository from "../Repositories/skaters.repositories"

export async function createSkater(skater: Skaters) {
    return await skaterRepository.createSkater(skater);
}

export async function getSkaters() {
    return await skaterRepository.getSkaters();
}
