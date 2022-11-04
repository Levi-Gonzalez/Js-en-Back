
/*
>> Consigna: 
1) Declarar una clase Usuario
2) Hacer que Usuario cuente con los siguientes atributos:
nombre: String
apellido: String
libros: Object[]
mascotas: String[]
Los valores de los atributos se deberán cargar a través del constructor, al momento de crear las instancias.

3)
Hacer que Usuario cuente con los siguientes métodos:
getFullName(): String. Retorna el completo del usuario. Utilizar template strings.

addMascota(String): void. Recibe un nombre de mascota y lo agrega al array de mascotas.
countMascotas(): Number. Retorna la cantidad de mascotas que tiene el usuario.


addBook(String, String): void. Recibe un string 'nombre' y un string 'autor' y 
debe agregar un objeto: { nombre: String, autor: String } al array de libros.
getBookNames(): String[]. Retorna un array con sólo los nombres del array de libros del usuario.

4) Crear un objeto llamado usuario con valores arbitrarios e invocar todos sus métodos.


*/
class User {
    constructor (nombre, apellido){
        this.nombre = nombre
        this.apellido = apellido
        this.libros = []
        this.mascotas = []
    }

    getFullName = () =>{
        return `${this.nombre} ${this.apellido}`
    }
    addMascota(nombre){
        return `${this.mascotas.push(nombre)}`
    }
    countMascotas(){
        return `La cantidad de mascotas son : ${this.mascotas.length}`
    }
    addBook(nombre,autor){
        {this.libros.push({nombre, autor})}
    }
  getBookNames = () =>
  {return this.libros.map((libro) => 
  {return libro.nombre})}
}

const datos = new User ("Levi" , "Gonzalez")

datos.addMascota("Bullser")
datos.addBook("Vikings","Levi")
// datos.countMascotas("")

console.log(datos.getFullName());
console.log(datos.countMascotas());
console.log(datos.getBookNames());
