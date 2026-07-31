const prompt = require("prompt-sync")();

// Crear un programa en Javascript que realice lo siguiente:
// Debe solicitar al usuario la temperatura en grados Celsius por prompt o por un input.
console.log("Este programa convierte la temperatura ingresada de grados Celsius a grados Fahrenheit y Kelvin");
console.log("==================================================================================================================")
let gradosCelsius = parseFloat(prompt("\nEscribe la temperatura en grados Celsius: "))

let gradosFahrenheit = 0;
let gradosKelvin = 0;

// Debe ser capaz de identificar si los datos de entrada sean de tipo number, en caso contrario debe mandar un mensaje de error y volver a solicitar los datos.
if (typeof gradosCelsius === "number"){
    // Debe convertir la temperatura ingresada de grados Celsius a grados Fahrenheit y Kelvin
    gradosFahrenheit = (gradosCelsius * 9 / 5) + 32;
    gradosKelvin = gradosCelsius + 273.15
} else {
    console.log("Valor invalido, debes ingresar un valor numerico.")
}

// Debe imprimir ambos resultados por consola o por el DOM.
console.log(`La conversion de ${gradosCelsius} grados Celsius es: \n
            => Grados Fahrenheit: ${gradosFahrenheit} \n
            => Grados Kelvin: ${gradosKelvin}`)

console.log("==================================================================================================================")