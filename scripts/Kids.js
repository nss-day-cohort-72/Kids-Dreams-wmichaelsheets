import { getChildren } from "./database.js"

const children = getChildren()

document.addEventListener(
    "click",
    (clickEvent) => {
        const childClicked = clickEvent.target

        if (childClicked.dataset.type === "child") {
            window.alert(`${childClicked.dataset.name} wishes to ${childClicked.dataset.wish}`)
        }
    }
)




export const Kids = () => {
    let html = "<ol>"

    for (const child of children) {
        html += `<li data-id="${child.id}" data-type="child" data-wish="${child.wish}" data-name="${child.name}">${child.name}</li>`
    }

    html += "</ol>"
    return html
}

