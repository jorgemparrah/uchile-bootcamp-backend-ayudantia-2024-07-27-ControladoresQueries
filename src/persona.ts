import { Mascota } from "./mascota";

export class Persona {

  constructor(
    public rut: string,
    public nombre: string,
    public apellido: string,
    public mascotas: Mascota[]
  ){
  }

}