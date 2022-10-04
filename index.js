  // PRIMER DESAFIO:
  class Usuario {
    constructor(nombre, apellido, libros = [], mascotas = []) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;
    }
    getFullName() {
        return `${this.nombre} ${this.apellido}`;
    }
    addMascota(mascota) {
        this.mascotas.push(mascota);
    }
    countMascotas() {
        return `${this.mascotas.length}`;
    }
    addBook(libro) {
        this.libros.push(libro);
    }
    getBookNames() {
        return this.libros.map(libro => `${libro.nombre}`);
    }
  }

  const usuario = new Usuario("Erika", "Di Pietro");

  usuario.addBook([{libro: "No me acuerdo ninguno xD", autor: "Fulanito"}]);

  console.log(usuario.getBookNames());

