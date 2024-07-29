import { Injectable } from '@nestjs/common';
import { Persona } from './persona';
import { Mascota } from './mascota';

@Injectable()
export class AppService {
  personas: Persona[] = [];

  constructor() {
    this.personas.push(new Persona("1234", "Jorge", "Parra", [
      new Mascota("Lobo", "Perro"),
      new Mascota("Sam", "Gato")
    ]));
    this.personas.push(new Persona("1111", "Jorge", "Hernandez", []))
    this.personas.push(new Persona("2222", "Boris", "Suazo", [
      new Mascota("Tom", "Gato")
    ]))
    this.personas.push(new Persona("3333", "Carlos", "Suescun", [
      new Mascota("Mar", "Perro")
    ]))
  }

  buscarPersona(rut: string): Persona {
    console.log(`Rut: ${rut}`);
    const encontrado1 : Persona = this.personas.find(p => p.rut == rut);

    let encontrado2 : Persona = null;
    for (const p of this.personas) {
      if (p.rut == rut) {
        encontrado2 = p;
        break;
      }
    }
    console.log(encontrado1);
    console.log(encontrado2);
    return encontrado1;
  }

  buscarPersonas(nombre: string, apellido: string): Persona[] {
    console.log(`nombre: ${nombre}`);
    console.log(`apellido: ${apellido}`);
    let encontrados1 : Persona[] = this.personas;
    if (nombre) {
      encontrados1 = encontrados1.filter(p => p.nombre == nombre)
    }
    if (apellido) {
      encontrados1 = encontrados1.filter(p => p.apellido == apellido);
    }
    return encontrados1;
  }
}
