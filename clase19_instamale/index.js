// const likes = document.getElementById("likes")
// console.log(likes)
// likes.classList.add("rojo")

// const img = document.querySelector("img")
// console.log(img.src)
// img.src = "http://placekitten.com/200"
// console.log(img.scr)


// const link = document.querySelector("a")
// console.log(link.href)
// link.href = "http://placekitten.com/200"
// console.log(link.href)

// const titulo = document.querySelector("h2")
// console.log(titulo.textContent)
// titulo.textContent = "Pepo"
// console.log(titulo.textContent)


//  ::: JS EVENTS :::
// :: mapas de calor :: saber donde clican mas ::

// const card = document.querySelector(".card")
// card.onclick = () => {
//     console.log("hiciste clic")
// }

// card.ondblclick = () => {
//     console.log("hiciste doble clic")
// }

// window.onkeydown = () => {
//     console.log("hiciste key down")
// }
// window.onkeypress = () => {
//     console.log("hiciste key press")
// }
// window.onkeyup = () => {
//     console.log("hiciste key up")
// }
// window.onresize = () => {
//     console.log("cambiaste el tamaño de la ventana")
// }

// card.onmouseenter = () => {
//     console.log("el mouse enter")
// }

// card.onmouseleave = () => {
//     console.log("el mouse salio")
// }

// usar: event o "e" -- un evento del navegador al que js esta reaccionando
// const card = document.querySelector(".card")
// card.onclick = (event) => {
//     console.log(event)
// }

// const card = document.querySelector(".card")
// card.onclick = (e) => {
//     console.log(e)
// }

// // cada tecla me da un evento en el console
// window.onkeydown = (e) => {
//     console.log(e.key)
// }

// // cuando apretar enter salta alert
// window.onkeydown = (e) => {
//     if (e.keyCode === 13) {
//         alert("apretaste enter")
//     }
// }


const card = document.querySelector(".card")
const img = document.querySelector("img")
const corazon = document.querySelector(".fa.fa-heart")
const likes = document.querySelector("#likes")

img.onclick = () => {
    if (corazon.classList.contains("rojo")) {
        corazon.classList.remove("rojo")
        likes.textContent = 0
    } else {
        corazon.classList.add("rojo")
        likes.textContent = "1"
    }
}


card.onclick = (e) => {
    console.log(e)
}