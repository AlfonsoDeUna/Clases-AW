var operando1 = "";

// esto es la creación de variables de los elementos html 
var uno = document.getElementById('1');
var dos = document.getElementById('2');
var tres = document.getElementById('3');
var cuatro = document.getElementById('4');
var cinco = document.getElementById('5');
var seis = document.getElementById('6');
var siete = document.getElementById('7');
var ocho = document.getElementById('8');
var nueve = document.getElementById('9');
var cero = document.getElementById('0');
var suma = document.getElementById('+');
var resta = document.getElementById('-');
var mul = document.getElementById('*');
var dividir = document.getElementById('/');
var res = document.getElementById('=');
var display =  document.getElementById('resultado');

// Este código es el que añade el dígito en el display de la calculadora
uno.onclick = function (){
    display.textContent = display.textContent + "1";
}
dos.onclick = function (){
    display.textContent = display.textContent + "2";
}
uno.onclick = function (){
    display.textContent = display.textContent + "1";
}
tres.onclick = function (){
    display.textContent = display.textContent + "3";
}
cuatro.onclick = function (){
    display.textContent = display.textContent + "4";
}
cinco.onclick = function (){
    display.textContent = display.textContent + "5";
}
seis.onclick = function (){
    display.textContent = display.textContent + "6";
}
siete.onclick = function (){
    display.textContent = display.textContent + "7";
}
ocho.onclick = function (){
    display.textContent = display.textContent + "8";
}
nueve.onclick = function (){
    display.textContent = display.textContent + "9";
}
cero.onclick = function (){
    display.textContent = display.textContent + "0";
}

suma.onclick = function (){
    operando1 = display.textContent;
    borrarDisplay();

}

function borrarDisplay (){
    display.textContent="";
}