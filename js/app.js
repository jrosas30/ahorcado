const palabras = ["caballo", "perro", "gato", "mesa", "silla", "computador", "luna", "oscuridad", "automovil", "avion"];

function palabraAzar(lista) {
    let index = Math.floor(Math.random() * lista.length);
    // console.log(index)
    dibujarGuiones(lista[index])
    return lista[index];
}

palabraAleatoria = palabraAzar(palabras)
console.log(palabraAleatoria)

function dibujarGuiones(palabraSorteada) {
    let palabraConvertida = palabraSorteada.replace(/[A-Za-z]/gm, "_ ");
    document.querySelector("#salida").value = palabraConvertida;
}

const botonJugar = document.getElementById("boton-comenzar");
botonJugar.addEventListener("click", palabraAzar)