import { Controller, Get, Param, Query, Response } from '@nestjs/common';
import { AppService } from './app.service';
import { Persona } from './persona';
import { Response as ResponseExpress } from 'express';

@Controller("personas")
export class AppController {

  constructor(private readonly appService: AppService) {
  }

  @Get("rut/:rut")
  buscarPersona(@Param("rut") rut: string, @Response() response: ResponseExpress) {
    const persona : Persona = this.appService.buscarPersona(rut);
    if (persona) {
      response.status(200).json(persona)
    } else {
      response.status(404).json("La persona no existe")
    }
  }

  @Get("buscar")
  buscarPersonas(@Query("nombre") nombre: string, @Query("apellido") apellido: string, @Response() response: ResponseExpress) {
    if (!nombre && !apellido) {
      response.status(400).json("Tienes que agregar quieries de nombre y/o apellido")
    }
    const personas : Persona[] = this.appService.buscarPersonas(nombre, apellido);
    if (personas && personas.length > 0) {
      response.status(200).json(personas)
    } else {
      response.status(404).json("No existen personas con esos atributos")
    }
  }

}
