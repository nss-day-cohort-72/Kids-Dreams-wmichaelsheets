import { getChildren, getCelebrities } from "./database.js"

const kids = getChildren()
const celebrities = getCelebrities()

const findCelebrityMatch = (kidObject, celebrityArray) => {
    let assignCelebrity = null

    for (const celebrity of celebrityArray) {
        if (celebrity.id === kidObject.celebrityId) {
            assignCelebrity = celebrity
        }
    }
            return assignCelebrity
    }
    


export const Pairings = () => {
    let html = "<ul>"
    
    for (const kid of kids) {
        const kidStar = findCelebrityMatch(kid, celebrities)
       
        html += `
            <li>
                ${kid.name} will be making memories with ${kidStar.name}, a ${kidStar.sport} star, by ${kid.wish}
            </li>
        `
    }

    html += "</ul>"

    return html
}

