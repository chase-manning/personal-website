import { Component, OnInit } from '@angular/core';
import { Circle } from './circle';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private circles: Circle[] = [];

  constructor() { 
    this.circles.push(new Circle(100, 425, 475, '#000'));
  }

  ngOnInit() {
  }

}
