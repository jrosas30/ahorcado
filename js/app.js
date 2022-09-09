let vidas = 9;
const palabras = ["caballo", "perro", "gato", "mesa", "silla", "computador", "luna", "oscuridad", "automovil", "avion", "sofa", "telefono", "pantalla", "lapiz", "escritorio"];
const expresionReg = /^[a-z]+$/i;

const inciarJuego = () => {
    let palabraAzar = palabraAleatoria(palabras);
    funRemplazarLetras(palabraAzar)
}

const palabraAleatoria = (lista) => {
    let index = Math.floor(Math.random() * lista.length);
    console.log(lista[index])
    palabraSelecionada = lista[index];
    return palabraSelecionada
}

const funRemplazarLetras = (palabra) => {
    let palabraConvertida = palabra.replace(/[A-Za-z]/gm, "_");
    document.querySelector("#salida").value = palabraConvertida
    const arrayLetras = Array.from(palabraConvertida);
    document.addEventListener("keypress", (e) => {
        for (let i = 0; i < palabra.length; i++) {
            letraPresionada = e.key;
            if (letraPresionada == palabra[i]) {
                console.log(palabra[i]);
                arrayLetras[i] = letraPresionada
            }
        }
        console.log(arrayLetras)
        let cadena = arrayLetras.join('');
        document.querySelector("#salida").value = cadena
    })
}

const botonJugar = document.getElementById("boton-comenzar");
console.log(botonJugar)
botonJugar.addEventListener("click", inciarJuego)