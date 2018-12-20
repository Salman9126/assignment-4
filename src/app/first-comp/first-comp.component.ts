import { Component, OnInit } from '@angular/core';
import { SecondCompComponent } from '../second-comp/second-comp.component';

@Component({
  selector: 'app-first-comp',
  templateUrl: './first-comp.component.html',
  styleUrls: ['./first-comp.component.css']
})
export class FirstCompComponent implements OnInit {

  str:string = "Hello from First component"
  constructor() { }

  ngOnInit() {
  }

}
