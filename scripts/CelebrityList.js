import { getCelebrities } from "./database.js"

const celebrities = getCelebrities()


document.addEventListener(
    "click",
    (clickEvent) => {
        const celebClicked = clickEvent.target

        if (celebClicked.dataset.type === "celebrity") {
            window.alert(`${celebClicked.dataset.name} plays ${celebClicked.dataset.sport}`)
        }
    }
)


export const Celebrities = () => {
    let html = "<ol>"

    for (const star of celebrities) {
        html += `<li 
                    data-id="${star.id}" 
                    data-type="celebrity"
                    data-sport="${star.sport}"
                    id="star--${star.id}"
                    data-name="${star.name}">
                    ${star.name}
                </li>`
    }

    html += "</ol>"
    return html
}
