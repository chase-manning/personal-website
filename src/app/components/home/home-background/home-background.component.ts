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
    this.マウスX乗数 = (event.clientX / window.innerWidth) * -2 + 1;
    this.マウスY乗数 = (event.clientY / window.innerHeight) * -2 + 1;
  }

  public マウスX乗数: number = 0.5;
  public マウスY乗数: number = 0.5;

  ngOnInit() {
  }

}
