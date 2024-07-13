/*

    1. Define qué es la Programación Orientada a Objetos (POO):
        R/ La programacion orientada a objetos es un paradigma en el cual se un utilizan clases y 
        objetos el caul cada uno tiene metodos y atributos para representar y manejar sus datos            
    2.  Explica los siguientes principios fundamentales de la POO:
            •Encapsulamiento : un el medio en el que un objeto muestra o resguarda la informacion y los metodos que maneja
            -Herencia : se refiere a que las clases pueden heredar atributos o metodos de clases padres
            -Polimorfismo : se refiere a la capacidad de las objetos de tomar metodos y datos de diferentes clases usandolos en su propio entorno
            -Abstracción : obtener de manera general los conceptos de una entidad para representarlo de manera bastracta en codigo


            
    3. Describe mediante texto y usando pseudo-código cómo implementarías una clase Animal con 
    las siguientes propiedades y métodos:
    •Propiedades: nombre (string), edad (número)
    •Métodos: hablar() (método abstracto)
    Luego, proporciona una implementación concreta para las clases Perro y Gato, donde 
    hablar() retorna "Guau" y "Miau" respectivamente.

    1) crear clase animal: 
        -darle nombre a la clase : class Animal {
        }
        -crear el constructor : constructor(nombre , edad){
        }
        -indicar que los parametros que recibimos en el constructor se le asignan a la clase animal :   this.nombre = nombre;
                                                                                                        this.edad = edad;
        -se crea el metodo hablar() : hablar(){
                throw new Error("esto es un metodo abstracto");
            }
    */


        class Animal {

            constructor(nombre , edad){
                this.nombre = nombre;
                this.edad = edad;
            }

            hablar(){
                throw new Error("esto es un metodo abstracto");
            }
            moverse(){
                throw new Error("esto es un metodo abstracto");
            }
        }

        class Perro extends Animal {
            constructor(nombre, edad)
            {
                super(nombre,  edad);
            }
            hablar(){
                console.log(`${this.name} hace : Guau `);
            }
            morverse()
            {
                console.log(`${this.name} hace : El perro está corriendo `);
            }
        }

        class Gato extends Animal {
            constructor(nombre, edad)
            {
                super(nombre,  edad);
            }
            hablar(){
                console.log(`${this.name} hace : Miau`);
            }
            morverse()
            {
                console.log(`${this.name} hace : El gato está caminando sigilosamente `);
            }
        }

        /*
        implementación Básica
            1. ¿Cómo se define una clase en JavaScript? Proporciona un ejemplo de una clase Persona con 
            propiedades nombre y edad, y un método presentarse() que imprima una presentación 
            en la consola. Propón como implementar la funcionalidad para conversar e iniciar una 
            conversación entre dos Personas.
*/

        class Persona {
            constructor(nombre, edad){
                this.nombre = nombre;
                this.edad = edad;
            }
            presentarse(){
                console.log(`hola soy ${this.nombre} mi edad es ${this.edad}`);
            }
            conversar(otraPersona){
                console.log(`Hola ${otraPersona.nombre} tienes ${otraPersona.edad} años?`);
            }
        }

        let jhorman = new Persona("Jhorman", 22 );
        let andrea = new Persona("Andrea" , 21);

   /*

   Creación de Clases y Objetos
        2. Implementa una clase Vehiculo en JavaScript con las siguientes características:
        •Propiedades: marca, modelo, año
        •Método: detalles() que retorne una cadena con los detalles del vehículo.
        Luego, crea dos instancias de Vehiculo diferentes y llama al método detalles() para 
        ambas.
        3. Crea una clase abstracta Animal con propiedades nombre y edad, y métodos abstractos 
        hablar() y moverse(). Luego, implementa las subclases Perro y Gato que hereden de 
        Animal, donde hablar() retorna "Guau" para Perro y "Miau" para Gato, y moverse() 
        retorna "El perro está corriendo" y "El gato está caminando sigilosamente" respectivamente. 
        Instancia objetos de ambas clases y muestra los resultados en un documento HTML de llamar a 
        hablar() y moverse()
*/

class Vehiculo {
    constructor(marca , modelo ,años){
        this.marca = marca;
        this.modelo = modelo;
        this.años = años;
    }
    detalles(){
        console.log(`la marca del vehiculo es : ${this.marca} el modelo del vehiculo es : ${this.modelo} el ano del vehiculo es ${this.años}.`);
    }
}


let toyota = new Vehiculo("Toyota" , "supra", "2019");
let audi = new Vehiculo("Audi" , "A3" , "2015");

toyota.detalles();
audi.detalles();

document.