import { Component, OnInit } from '@angular/core';
declare const main : any;
@Component({
  selector: 'app-skeleton',
  templateUrl: './skeleton.component.html',
  styleUrls: ['./skeleton.component.css']
})
export class SkeletonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
   main();
  }

}
