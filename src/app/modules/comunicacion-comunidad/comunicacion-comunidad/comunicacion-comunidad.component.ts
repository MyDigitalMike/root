import { Component, OnInit } from '@angular/core';
declare const HerramientasComunidad: any;
@Component({
  selector: 'app-comunicacion-comunidad',
  templateUrl: './comunicacion-comunidad.component.html',
  styleUrls: ['./comunicacion-comunidad.component.css']
})
export class ComunicacionComunidadComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    HerramientasComunidad();
  }

}
