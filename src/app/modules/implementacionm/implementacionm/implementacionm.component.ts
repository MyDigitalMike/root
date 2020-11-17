import { Component, OnInit } from '@angular/core';
declare const PlanM: any;
@Component({
  selector: 'app-implementacionm',
  templateUrl: './implementacionm.component.html',
  styleUrls: ['./implementacionm.component.css']
})
export class ImplementacionmComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    PlanM();
  }

}
