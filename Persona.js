class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    obtDetalles(){
        console.log(`La persona se llama ${this.nombre} y tiene ${this.edad} años`);
    }
}

class Estudiante extends Persona {
    constructor(nombre, edad, calificacion) {
        super(nombre, edad);
        this.calificacion = calificacion;
    }
    obtDetalles(){
        console.log(`La persona se llama ${this.nombre}, tiene ${this.edad} años y su calificación es ${this.calificacion}`);    
    }
}

class Profesor extends Persona {
    constructor(nombre, edad, asignatura, nivel) {
        super(nombre, edad);
        asignatura = "JS";
        nivel = "basico"
    }
    obtDetalles(){
        console.log(`El profesor se llama ${this.nombre}, tiene ${this.edad} años, su asignatura es ${this.asignatura} y el nivel de la asignatura es ${this.nivel}`);    
    }
}

let jimmy = new Persona("Jimmy", 25)
jimmy.obtDetalles();
let alexander = new Estudiante("Alexander", 25, 4);
alexander.obtDetalles();