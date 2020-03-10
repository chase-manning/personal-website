import { Component, OnInit, HostListener } from '@angular/core';
import { Circle } from '../../models/circle';
import { Layer } from 'src/app/models/layer';
import { Slice } from '../../models/slice';

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

  private layers: Layer[] = [];
  private mouseXMultiplier: number = 0.5;
  private mouseYMultiplier: number = 0.5;

  constructor() { 
    this.innitialiseLayers();
  }

  ngOnInit() {
  }

  innitialiseLayers(): void {
    this.innitialiseLayerTwo();
    this.innitialiseLayerOne();
    console.log(this.layers);
  }

  innitialiseLayerOne(): void {
    let circles: Circle[] = [];

    let ww: number = window.innerWidth;
    let wh: number = window.innerHeight;

    let br: number = ww / 8;
    let bx: number = ww * 0.75;
    let by: number = wh / 2;

    circles.push(new Circle(br, bx, by));
    circles.push(new Circle(br * 0.75, bx - br / 2, by - br / 2));
    circles.push(new Circle(br * 0.66, bx + br, by - br / 3));
    circles.push(new Circle(br, bx + br / 3, by + br / 3));
    circles.push(new Circle(br, bx - br, by + br / 2));
    circles.push(new Circle(br / 3, bx - br * 2, by - br));

    this.layers.push(new Layer(circles, 1));
  }

  innitialiseLayerTwo(): void {
    let circles: Circle[] = [];

    let ww: number = window.innerWidth;
    let wh: number = window.innerHeight;

    let br: number = ww / 8;
    let bx: number = ww * 0.75;
    let by: number = wh / 2;

    circles.push(new Circle(br / 2, bx, by));

    this.layers.push(new Layer(circles, 2));
  }


}
