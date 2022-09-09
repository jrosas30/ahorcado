// let teclas = {
//     arrayTeclas: new Array(),
//     iniciar:function () {
//         document.onkeydown=teclas.guardarTeclas;
//     },
//     guardarTeclas:function (e) {
//         teclas.arrayTeclas.push(e.key);
//         console.log(e.key);
//     },
//     teclaPulsada: function (codLetra){
//         return (teclas.arrayTeclas.indexOf(codLetra))?true:false;
//     },
//     borrarTeclas: function(){
//         teclas.arrayTeclas = new Array();
//     },
//     mostrarTeclas: function () {
//         console.log(teclas.arrayTeclas);
//     }
// }

const regexp = /^[a-z]+$/i;

arrayTeclas = new Array()
let iniciar = function () {
    // document.onkeydown = guardarTeclas;
}
let guardarTeclas = function (e) {
    if (regexp.test(e.key)) {
        arrayTeclas.push(e.key);
        console.log(e.key);
    } else {
        console.error("la tecla pulsada no es una letra")
    }
}

let teclaPulsada = function (codLetra) {
    return (arrayTeclas.indexOf(codLetra)) ? true : false;
}
let borrarTeclas = function () {
    arrayTeclas = new Array();
}
let mostrarTeclas = function () {
    console.log(arrayTeclas);
}

