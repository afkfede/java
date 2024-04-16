//Alumno: Palacio Allende Federico
//Ejercicio 1
alert("Hello World")

//Ejercicio 2 
document.write("Hello World")

//Ejercicio 3
document.write("8")

//Ejercicio 4
var n = prompt("Ingresa tu nombre")
alert("Hola " + n)

//Ejercicio 5
var a = parseInt(prompt("Ingrese un numero"))
var b = parseInt(prompt("Ingrese otro numero"))
document.write("La suma es " + (a+b))

//Ejercicio 6
var numeroMayor = function(valor1, valor2){
    if (valor1 > valor2) {return valor1}
    return valor2
}
var v1 = parseInt(prompt("Ingrese un numero entero: "))
var v2 = parseInt(prompt("Ingrese otro numero entero: "))
alert("El numero mayor es: " + numeroMayor(v1, v2))

//Ejercicio 7
var n1 = parseInt(prompt("Ingrese el primer numero: "))
var n2 = parseInt(prompt("Ingrese el segundo numero: "))
var n3 = parseInt(prompt("Ingrese el segundo numero: "))
if (n1 >= n2 && n1 >= n3) {
    alert("El mayor numero es: " + n1)
} else if (n2 >= n1 && n2 >= n3) {
    alert("El mayor numero es: " + n2)
} else {
    alert("El mayor numero es: " + n3)
}

//Ejercicio 8
var n = parseInt(prompt("Ingrese un número"))
if (n % 2 == 0) {
    console.log("Es divisible por 2")
} else {
    console.log("No es divisible por 2")
}

//Ejercicio 9 
var frase = prompt("Ingrese una frase: ")
var contador = 0
for (var i = 0; i < frase.length; i++){
    if (frase[i].toLowerCase() === 'a') {
         contador++;
    }
}
alert("La letra 'a' aparece " + contador + " veces en la frase")

//Ejercicio 10
var frase = prompt("Ingrese una frase: ")

for (var i = 0; i < frase.length; i++){
    if (frase[i].toLowerCase() === 'a') {
         alert("Aparece la vocal 'a'");
    }
    if (frase[i].toLowerCase() === 'e') {
        alert("Aparece la vocal 'e'");
    }
    if (frase[i].toLowerCase() === 'i') {
        alert("Aparece la vocal 'i'");
    }
    if (frase[i].toLowerCase() === 'o') {
        alert("Aparece la vocal 'o'");
    }
    if (frase[i].toLowerCase() === 'u') {
        alert("Aparece la vocal 'u'");
    }
}

//Ejercicio 11 
var frase = prompt("Ingrese una frase: ")
var contadorA = 0
var contadorE = 0
var contadorI = 0
var contadorO = 0
var contadorU = 0
var acu = 0
for (var i = 0; i < frase.length; i++){
    if (frase[i].toLowerCase() === 'a') {
         contadorA++;
    }
}
for (var i = 0; i < frase.length; i++){
    if (frase[i].toLowerCase() === 'e') {
         contadorE++;
    }
}
for (var i = 0; i < frase.length; i++){
    if (frase[i].toLowerCase() === 'i') {
         contadorI++;
    }
}
for (var i = 0; i < frase.length; i++){
    if (frase[i].toLowerCase() === 'o') {
         contadorO++;
    }
}
for (var i = 0; i < frase.length; i++){
    if (frase[i].toLowerCase() === 'u') {
         contadorU++;
    }
}
acu = contadorA+contadorE+contadorI+contadorO+contadorU
alert("La frase tiene un total de " + acu + " vocales")

//Ejercicio 12
var frase = prompt("Ingrese una frase: ")
var contadorA = 0
var contadorE = 0
var contadorI = 0
var contadorO = 0
var contadorU = 0
for (var i = 0; i < frase.length; i++){
    if (frase[i].toLowerCase() === 'a') {
         contadorA++;
    }
}
for (var i = 0; i < frase.length; i++){
    if (frase[i].toLowerCase() === 'e') {
         contadorE++;
    }
}
for (var i = 0; i < frase.length; i++){
    if (frase[i].toLowerCase() === 'i') {
         contadorI++;
    }
}
for (var i = 0; i < frase.length; i++){
    if (frase[i].toLowerCase() === 'o') {
         contadorO++;
    }
}
for (var i = 0; i < frase.length; i++){
    if (frase[i].toLowerCase() === 'u') {
         contadorU++;
    }
}
alert("La vocal 'a' aparece " + contadorA + " veces en la frase")
alert("La vocal 'e' aparece " + contadorE + " veces en la frase")
alert("La vocal 'i' aparece " + contadorI + " veces en la frase")
alert("La vocal 'o' aparece " + contadorO + " veces en la frase")
alert("La vocal 'u' aparece " + contadorU + " veces en la frase")

//Ejercicio 13
var n = parseInt(prompt("Ingrese un número"))
if (n % 2 == 0) {
    console.log("Es divisible por 2")
} else{
    if (n % 3 == 0) {
        console.log("Es divisible por 3")
    } else{
        if (n % 5 == 0) {
            console.log("Es divisible por 5")
        } else{
            console.log("Es divisible por 7")
        }
    }
}

//Ejercicio 14
var n = parseInt(prompt("Ingrese un número"))
if (n % 2 == 0) {
    console.log("Es divisible por 2")
}
if (n % 3 == 0) {
    console.log("Es divisible por 3")
}
if (n % 5 == 0) {
    console.log("Es divisible por 5")
}
if (n % 7 == 0) {
    console.log("Es divisible por 7")
}

//Ejercicio 15
var n = parseInt(prompt("Ingrese un numero"))
for(var i = 1; i <= 20; i++){
    if ([i] % n == 0) {
        document.write(i + " es divisible por " + n)
    }
    
}

//Ejercicio 17
var numero = parseInt(prompt("Ingrese un número: "))
function esPrimo(numero) {
    if (numero <= 1) {
        return false;
    }
    for (var i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            return false;
        }
    }
    return true;
}
if (esPrimo(numero)) {
    alert(numero + " es un número primo")
} else {
    alert(numero + " no es un número primo")
}

//Ejercicio 18
function mayorEdad(miEdad){
    
    if (miEdad >=18) {
            alert("Es mayor de edad: " +  miEdad + ", puede conducir.")
    } else {
            alert("Es menor de edad: " + miEdad + ", no puede conducir.")
    }
}
var edad = prompt("Ingrese su edad")
mayorEdad(edad)

//Ejercicio 19
var nota = parseInt(prompt("Ingrese su nota en el examen"))
switch (nota) {
    case 10:
        calificacion = "Sobresaliente"
        break;
    case 9:
    case 8:
        calificacion = "Notable"
        break;
    case 7:
    case 6:
        calificacion = "Bien"
        break;
    case 5:
        calificacion = "Suficiente"
        break;
    case 4:
        calificacion = "Insuficiente"
        break;
    case 3:
    case 2:
    case 1:
    case 0:
        calificacion = "Muy insuficiente"
        break;
    default:
        alert("Nota invalida.")
        break;
}
alert("Su calificacion es: " + calificacion)

//Ejercicio 20
var cadenas = []
while (true) {
    var cadena = prompt("Ingrese una cadena de texto (o presione 'cancelar' para salir):")
    if (cadena === null) {
        break;
    }
    cadenas.push(cadena)
}
var resultado = cadenas.join(" - ")
alert("Cadenas concatenadas: " + resultado)

//Ejercicio 21
var suma = 0
while (true) {
    var entrada = prompt("Ingrese un número (o presione 'cancelar' para salir):")
    if (entrada === null || entrada === "") {
        break;
    }
    var numero = parseFloat(entrada)
    if (!isNaN(numero)) {
        suma += numero;
    } else {
        alert("Ingrese un número válido.")
    }
}
alert("La suma total de los números introducidos es: " + suma)

//Ejercicio 23
var n = 30
    for (let i = 1; i <= n; i++) {
        console.log(String(i).repeat(i));
    }

//Ejercicio 24
var n = parseInt(prompt("Ingrese un numero: "))
    for (let i = n; i <= n; i--) {
        console.log(String(i).repeat(i));
    }

//Ejercicio 25
    for (let i = 1; i <= 500; i++) {
        console.log(i);
        if (i % 4 === 0) {
            console.log(i + " (Múltiplo de 4)");
        }
        if (i % 9 === 0) {
            console.log(i + " (Múltiplo de 9)");
        }
        if (i % 5 === 0) {
            console.log("————————————————————");
        }
    }
