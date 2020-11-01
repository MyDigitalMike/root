import { Component, OnInit } from '@angular/core';
declare const Genialy : any;
@Component({
  selector: 'app-cifras',
  templateUrl: './cifras.component.html',
  styleUrls: ['./cifras.component.css']
})
export class CifrasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    Genialy();
  }

}
