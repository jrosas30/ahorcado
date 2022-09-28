import { palabraGuardada } from "./palabraGuadada.js";


const palabras = ["caballo", "perro", "gato", "mesa", "silla", "computador", "luna", "oscuridad", "automovil", "avion", "sofa", "telefono", "pantalla", "lapiz", "escritorio"];
let palabraIngresada = document.getElementById("input-palabra");

const botonJugar = document.getElementById("boton-comenzar");
botonJugar.addEventListener("click", inciarJuego)

const botonGuardaJugar = document.getElementById("btn-guardar-empezar");
botonGuardaJugar.addEventListener("click", inciarJuego2)

const inciarJuego = () => {

    document.getElementById("malas").value = "";
    var palabraAzar = palabraAleatoria(palabras);
    var guiones = funRemplazarLetras(palabraAzar);
    var arrM = seleccionarLetras(palabraAzar, guiones);

}

const inciarJuego2 = () => {

    document.getElementById("malas").value = "";
    var palabraAzar = palabraAleatoria(palabraGuardada);
    var guiones = funRemplazarLetras(palabraAzar);
    var arrM = seleccionarLetras(palabraAzar, guiones);

}

const palabraAleatoria = (lista) => {
    let index = Math.floor(Math.random() * lista.length);
    console.log(lista[index])
    palabraSelecionada = lista[index];
    return palabraSelecionada
}

const funRemplazarLetras = (palabra) => {
    let palabraConvertida = palabra.replace(/[A-Za-z]/gm, "_");
    document.querySelector("#salida").value = palabraConvertida;

    return palabraConvertida;
}

function seleccionarLetras(palabra, arrGuiones) {
    let p = palabra
    const arrayLetras = Array.from(arrGuiones);
    // console.log(p)
    const arrayMalas = [];
    const arrayBuenas = [];
    const arrayLetraPresionada = []
    var vidas = 9;
    document.addEventListener("keypress", (e) => {
        var letraPresionada = e.key;
        for (let i = 0; i < p.length; i++) {
            if (letraPresionada == p[i]) {
                // console.log(p[i]);
                arrayLetras[i] = letraPresionada
            }
            if (letraPresionada != arrayLetraPresionada[i]) {
                if (p.includes(letraPresionada)) {
                    arrayBuenas.push(letraPresionada)
                    const dataArrBuenas = new Set(arrayBuenas)
                    var resultArrayBuenas = [...dataArrBuenas]
                    console.log("buenas: " + resultArrayBuenas);
                } else {
                    if (letraPresionada != "." && letraPresionada != "," && letraPresionada != "-" && letraPresionada != "´" && letraPresionada != "+" && letraPresionada != "<" && letraPresionada != ">" && letraPresionada != "{" && letraPresionada != "}" && letraPresionada != "*" && letraPresionada != "¨" && letraPresionada != "/" && letraPresionada != "0" && letraPresionada != "1" && letraPresionada != "2" && letraPresionada != "3" && letraPresionada != "3" && letraPresionada != "4" && letraPresionada != "5" && letraPresionada != "6" && letraPresionada != "7" && letraPresionada != "8" && letraPresionada != "9") {
                        arrayMalas.push(letraPresionada);
                        const dataArrMalas = new Set(arrayMalas);
                        var resultArrayMalas = [...dataArrMalas];
                        console.log("malas: " + resultArrayMalas)
                    }
                }
            }
        }
        let cadena = arrayLetras.join('');
        document.querySelector("#salida").value = cadena.toUpperCase();
        if (resultArrayMalas != undefined) {
            let stringMalas = resultArrayMalas.join('');
            document.getElementById("malas").value = stringMalas.toUpperCase();
        }

        arrayLetraPresionada.push(letraPresionada);
        console.log(arrayLetraPresionada)
        var vidas = 9;
        if (resultArrayMalas != undefined) {
            vidas = vidas - resultArrayMalas.length
        }
        switch (vidas) {
            case 8:
                PrimerTrazo();
                break;
            case 7:
                segundoTrazo()
                break;
            case 6:
                tercerTrazo()
                break;
            case 5:
                circunferencia()
                break;
            case 4:
                trazoCuerpo()
                break;
            case 3:
                trazoBrazoIzquierdo()
                break;
            case 2:
                trazoBrazoDerecho()
                break;
            case 1:
                trazoPiernaIzquierda()
                break;
            case 0:
                trazoPiernaDerecha()
                Swal.fire({
                    title: 'Perdiste!',
                    text: 'Intentalo de nuevo.',
                    imageUrl: '../img/perder.png',
                    imageWidth: 300,
                    imageHeight: 300,
                    imageAlt: 'Perdiste',
                })
        }
    })
}



