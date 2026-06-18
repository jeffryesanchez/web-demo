// // manejando datos de tipo "texto"
// alert("esta es una notificacion")

// let salarioMinimo = 1130
// console.log(salarioMinimo)

// let examen1 = 20
// let examen2 = 17
// let examen3 = 13
// let examen4 = 19

// console.log((examen1 + examen2 + examen3 + examen4) / 4)

// // //manejando numeros
// // alert(123)
// const PI = 3.1416
// console.log(PI)

// let edadMinima = 18
// let miEdad = 18

// if (miEdad > edadMinima) {
//     console.log("Puedes ingresar")
// }
// else if (miEdad == 18) {
//     console.log("Tienes exactamente 18, espera un añito mas")
// }
// else {
//     console.log("No eres mayor de edad")
// }

// let termineEscuela = true
// let edadPersona = 17

// if (termineEscuela == true && edadPersona >= 18) {
//     console.log("Puedes ingresar a la discoteca")
// }

// let pedido = "sushi"

// switch (pedido) {
//     case "pizza": console.log("He pedido pizza"); break
//     case "tacos": console.log("He pedido tacos"); break
//     case "sushi": console.log("He pedido sushi"); break
//     default: console.log("Lo siento, lo que pides no esta en el menu")
// }

// let fruta
// console.log(fruta)

// let hola = null
// console.log(hola)

// // console.log(avion)

// for (let plato = 10; plato > 0; plato--) {
//     console.log("He repartido el plato numero " + plato)
// }

// for (let i = 0; i <= 10; i += 2) {
//     console.log("El numero es: " + i)
// }

// for (let i = 1; i <= 50; i++) {
//     if (!(i % 5 == 0)) {
//         console.log(i)
//     }
// }

// let hambre = true
// let piezas = 0

// while (hambre) {
//     piezas++
//     console.log("comi la pieza numero " + piezas)

//     if (piezas == 4) {
//         hambre = false
//     }

//     let numero = 1
//     while(numero <= 5) {
//         console.log(numero)
//         numero++

//     }
// }

// let x = 0
// while(x < 4) {
//     console.log(x)
//     x++
// }

// let intentos = 0
// do {
//     intentos++
//     console.log("Este es mi " + intentos + " intento probando el plato")
// } while (intentos < 1)


// let edad = 19
// edad > 18 ?  console.log("Eres mayor de edad") : console.log("Eres menor de edad")

let nombre = "Ana"
console.log(nombre.toUpperCase())

let frase = "HOY PERU GANA"
console.log(frase.toLowerCase())

let frase2 = " esta es una frase "
console.log(frase2.trim())

let frase3 = "Bienvenidos a Javascript"
console.log(frase3.includes("Java"))

let fraseParaOlvidarla = "Una vez recibi un consejo que decia \"Para olvidarla...\" que fue de mi amigo"
console.log(fraseParaOlvidarla)
console.log(fraseParaOlvidarla.slice(0, 10))

console.log(fraseParaOlvidarla.replace("olvidarla", "conquistarla"))

let csv = "Ana,Luis,Carlos,Pepe"
console.log(csv.split(","))

let frase4 = "Hay 28 alumnos presentes"
console.log(frase4.startsWith("Hay"))
console.log(frase4.endsWith("presentes"))

let precio = 15.17683
console.log(precio.toFixed(2))
console.log(precio.toString())

let pozoGanador = 1000000
console.log(pozoGanador.toLocaleString())

console.log(Number.isNaN("25"))

let frutas = ["fresa", "naranja", "mandarina", "lima", "limon"]
let edades = [10, 20, 13, 15, 29, 18, true, "hola", [1, 2, 3]]

console.log(frutas)
console.log(edades)

frutas.push("maracuya")
console.log(frutas)

frutas.unshift("cereza")
console.log(frutas)

frutas.pop()
console.log(frutas)

frutas.shift()
console.log(frutas)

frutas[1] = "platano"
console.log(frutas)

// console.log(frutas[(frutas.length / 2).toFixed(0) - 1])

frutas.reverse()
console.log(frutas)

console.log(frutas.join(','))

const nombres = ["pepe", "ana", "juan", "maria", "jeffry"]
for (let i = 0; i < nombres.length; i++) {
    console.log(nombres[i].toUpperCase())
}

