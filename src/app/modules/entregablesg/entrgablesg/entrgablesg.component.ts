import { Component, OnInit } from '@angular/core';
declare const Entregables: any;
@Component({
  selector: 'app-entrgablesg',
  templateUrl: './entrgablesg.component.html',
  styleUrls: ['./entrgablesg.component.css']
})
export class EntrgablesgComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    Entregables();
  }

}
