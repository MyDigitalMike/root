import { Component, OnInit } from '@angular/core';
declare const CalidadAgua: any;
declare const Residuos: any;
declare const ProgramaControl: any;
declare const AguasR: any;
declare const Desinfeccion: any;
@Component({
  selector: 'app-progrmasm',
  templateUrl: './progrmasm.component.html',
  styleUrls: ['./progrmasm.component.css']
})
export class ProgrmasmComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    CalidadAgua();
    Residuos();
    ProgramaControl();
    AguasR();
    Desinfeccion();
  }

}
