// Crear un documento html con una adivinanza(o una pregunta) y
// 3 botones con posibles respuestas.


// Si se clickea la respuesta correcta, se debe mostrar en el documento 
// un texto que lo indique(por ejemplo: ¡Correcto!)
// debajo de la adivinanza, y el botón seleccionado 
// debe ponerse con un color de fondo verde.

//Si se clickea una respuesta incorrecta, se debe mostrar en 
//el documento un texto que lo indique(por ejemplo:
// ¡Le erraste!) y mostrar el botón con la respuesta 
// correcta con un color de fondo verde y los otros 
// dos con un color de fondo rojo.


const primerB = document.getElementById("button1")
const segundoB = document.getElementById("button2")
const tercerB = document.getElementById("button3")
const resultado = document.getElementById("resultadoC")

primerB.onclick = () => {
    resultado.textContent = "Cooorrectooo!"
    if (button1.classList.contains("boton-verde")) {
        button1.classList.remove("boton-verde")
    } else {
        button1.classList.add("boton-verde")
    }
}

segundoB.onclick = () => {
    resultado.textContent = "Erraaasteeee!"
    if (button2.classList.contains("boton-rojo")) {
        button2.classList.remove("boton-rojo")
    } else {
        button2.classList.add("boton-rojo")
    }
}

tercerB.onclick = () => {
    resultado.textContent = "Erraaasteeee!"
    if (button3.classList.contains("boton-rojo")) {
        button3.classList.remove("boton-rojo")
    } else {
        button3.classList.add("boton-rojo")
    }
}