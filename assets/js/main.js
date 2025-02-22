const separatorLine = document.querySelector(".line__wrapper")
const separatorLineBrands = Array.from(separatorLine.children)

separatorLineBrands.forEach((item) => {
    const duplicateNode = item.cloneNode(true)
    duplicateNode.setAttribute("aria-hidden", true)
    separatorLine.appendChild(duplicateNode)
})