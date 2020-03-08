import { Component, OnInit, HostListener } from '@angular/core';
import { Circle } from './circle';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @HostListener('document:mousemove', ['$event']) 
  onMouseMove(event: MouseEvent) {
    this.mouseXMultiplier = (event.clientX / window.innerWidth) * -2 + 1;
    this.mouseYMultiplier = (event.clientY / window.innerHeight) * -2 + 1;
  }

  private circles: Circle[] = [];
  private mouseXMultiplier: number = 1;
  private mouseYMultiplier: number = 1;

  constructor() { 
    this.innitialiseCircles();
  }

  ngOnInit() {
  }

  innitialiseCircles(): void {
    let circleCount: number = Math.round(Math.random() * 5) + 10;
    let i: number = 0;
    while (i < circleCount){
      // let radius: number = Math.round(Math.random() * 50) + 50;
      let radius: number = 100;
      let x: number = Math.round(Math.random() * (window.innerWidth/2 - 20)) + window.innerWidth/2;
      let y: number = Math.round(Math.random() * (window.innerHeight - 20 - window.innerHeight/3)) + window.innerHeight/3;
      this.circles.push(new Circle(radius, x, y));
      i++;
    }
  }

}
