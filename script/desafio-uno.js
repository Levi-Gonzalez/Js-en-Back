
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
    constructor (name, lastname ){
        this.name = name ,
        this.lastname = lastname,
        this.books = [] ,
        this.pets = []
    };

    
    getFullName = () => {  
    return `Hola, bienvenido ${this.name} ${this.lastname}` 
    };
    
    addMascota = (name) => {
    this.pets.push(name)
    };

    countMascotas = () => {
    return (`La cantidad de mascota es: ${this.pets.length}`)   
    };

    addBook = (nombre, autor) => {
    {this.books.push ({nombre, autor})}
    }

    getBooksName = () => {
    return this.books.map((books)=> {return books.nombre })
    }
}

const date = new User ("Levi", "Gonzalez");
date.addMascota("Bullser");
date.addBook("The Sagas of Ragnar Lodbrok " , "Ben Waggoner")


console.log(date.getFullName());
console.log(date.countMascotas());
console.log(date.getBooksName());
