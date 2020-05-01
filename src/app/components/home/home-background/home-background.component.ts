import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-home-background',
  templateUrl: './home-background.component.html',
  styleUrls: ['./home-background.component.css']
})
export class HomeBackgroundComponent implements OnInit {

  constructor() { }
  
  @HostListener('document:mousemove', ['$event']) 
  onMouseMove(event: MouseEvent) {
    this.mouseXMultiplier = (event.clientX / window.innerWidth) * -2 + 1;
    this.mouseYMultiplier = (event.clientY / window.innerHeight) * -2 + 1;
  }

  public mouseXMultiplier: number = 0.5;
  public mouseYMultiplier: number = 0.5;

  ngOnInit() {
  }

}
