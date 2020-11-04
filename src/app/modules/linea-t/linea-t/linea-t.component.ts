import { Component, OnInit } from '@angular/core';
declare const LineaT: any;
@Component({
  selector: 'app-linea-t',
  templateUrl: './linea-t.component.html',
  styleUrls: ['./linea-t.component.css']
})
export class LineaTComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    LineaT();
  }

}
