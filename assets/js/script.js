// String - Cadena de texto
const nombre = 'Juan'
// Number
const edad = 23
// Boolean
const casado = true || false
// Array
const colores = ['rojo', 'verde', 'azul']
// Object
const cliente = {
    nombre: 'Juan',
    edad: 23,
    casado: true,
    direccion: {
        calle: 'Calle falsa 123',
        ciudad: 'Madrid',
        pais: 'España'
    },
    pedido: ['camisa', 'pantalon', 'zapatos'],
    saludo: function() {
        console.log('Hola soy el método saludo');
    }
}

// console.log(cliente.saludo());

const miNuevaFuncion = function() {
    console.log('Cura del Cáncer');
}

const miNuevaFuncion2 = () => {
    console.log('Cura del Cáncer pero como funcion de flecha');
}

miNuevaFuncion()
miNuevaFuncion2()