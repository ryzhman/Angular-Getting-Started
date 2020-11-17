import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'pm-my-first-component',
  // NOTE: template for hard-coded template and templateUrl for file
  // templateUrl: './my-first-component.component.html',
  template: `<h3>{{helloWorld}}</h3>`,
  styleUrls: ['./my-first-component.component.css']
})
export class MyFirstComponentComponent implements OnInit {
  helloWorld = 'Hello world from my first component';

  constructor() {
  }

  ngOnInit(): void {
    alert('My first component is initialized');
  }

}
