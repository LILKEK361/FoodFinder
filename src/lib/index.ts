import {writable, get} from "svelte/store";

export const DIETOPTIONS = [
    "balanced",
    "high-fiber",
    "high-protein",
    "low-carb",
    "low-fat",
    "low-sodium"
]

export const DIETSTRING = writable("&diet")

export const AddDiet = (option : string) => {
    DIETSTRING.set(get(DIETSTRING) + option)
}


