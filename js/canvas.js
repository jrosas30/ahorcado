const canvas = document.querySelector("canvas");
const pincel = canvas.getContext("2d");

function dibujarBase() {
    pincel.beginPath();
    pincel.lineWidth = "5";
    pincel.strokeStyle = "#BA7328";
    pincel.moveTo(0, 355);
    pincel.lineTo(600, 355);
    pincel.stroke();
}
dibujarBase();

function PrimerTrazo() {
    pincel.beginPath();
    pincel.lineWidth = "10";
    pincel.strokeStyle = "#000000";
    pincel.moveTo(200, 3);
    pincel.lineTo(200, 355);
    pincel.stroke();
}

function segundoTrazo() {
    pincel.beginPath();
    pincel.lineWidth = "10";
    pincel.strokeStyle = "#000000";
    pincel.moveTo(195, 5);
    pincel.lineTo(320, 5);
    pincel.stroke();
}

function tercerTrazo() {
    pincel.beginPath();
    pincel.lineWidth = "10";
    pincel.strokeStyle = "#000000";
    pincel.moveTo(315, 3);
    pincel.lineTo(315, 55);
    pincel.stroke();
}

function circunferencia() {
    pincel.beginPath();
    pincel.arc(315, 85, 30, 0, 2 * Math.PI);
    pincel.lineWidth = "7";
    pincel.strokeStyle = "#0A3871";
    pincel.moveTo(258, 3);
    pincel.stroke();
    cara()
}

function cara() {
    pincel.beginPath();
    pincel.arc(325, 80, 3, 0, 2 * Math.PI);
    pincel.lineWidth = "7";
    pincel.moveTo(258, 3);
    pincel.stroke();
    pincel.beginPath();
    pincel.arc(305, 80, 3, 0, 2 * Math.PI);
    pincel.lineWidth = "7";
    pincel.moveTo(258, 3);
    pincel.stroke();
    pincel.beginPath();
    pincel.arc(315, 95, 10, 0, 1 * Math.PI);
    pincel.lineWidth = "4";
    pincel.moveTo(258, 3);
    pincel.stroke();
}

function trazoCuerpo() {
    pincel.beginPath();
    pincel.lineWidth = "10";
    pincel.strokeStyle = "#0A3871";
    pincel.moveTo(315, 115);
    pincel.lineTo(315, 230);
    pincel.stroke();
}

function trazoBrazoIzquierdo() {
    pincel.beginPath();
    pincel.lineWidth = "10";
    pincel.strokeStyle = "#0A3871";
    pincel.moveTo(315, 115);
    pincel.lineTo(280, 175);
    pincel.stroke();
}

function trazoBrazoDerecho() {
    pincel.beginPath();
    pincel.lineWidth = "10";
    pincel.strokeStyle = "#0A3871";
    pincel.moveTo(315, 115);
    pincel.lineTo(350, 175);
    pincel.stroke();
}

function trazoPiernaIzquierda() {
    pincel.beginPath();
    pincel.lineWidth = "10";
    pincel.strokeStyle = "#0A3871";
    pincel.moveTo(315, 230);
    pincel.lineTo(280, 315);
    pincel.stroke();
}

function trazoPiernaDerecha() {
    pincel.beginPath();
    pincel.lineWidth = "10";
    pincel.strokeStyle = "#0A3871";
    pincel.moveTo(315, 230);
    pincel.lineTo(350, 315);
    pincel.stroke();
}