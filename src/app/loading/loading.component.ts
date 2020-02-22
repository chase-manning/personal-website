import { Component, OnInit } from '@angular/core';
import { Fuel } from './fuel';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {

  //Elements
  private mainCircle: HTMLElement;
  private fuelCircles: Fuel[] = [];

  //Status
  private circleDiameter: number = 1;

  constructor() { }

  ngOnInit() {
    this.mainCircle = document.querySelector('.circle') as HTMLElement;
    console.log(this.generateFuel(1, this.generateRandomDirection()));
    console.log(this.generateFuel(1, this.generateRandomDirection()));
    console.log(this.generateFuel(1, this.generateRandomDirection()));
    console.log(this.generateFuel(1, this.generateRandomDirection()));
    console.log(this.generateFuel(1, this.generateRandomDirection()));
    console.log(this.generateFuel(1, this.generateRandomDirection()));
    console.log(this.generateFuel(1, this.generateRandomDirection()));
    console.log(this.generateFuel(1, this.generateRandomDirection()));
    this.addFuelCircles();
  }

  //Getters
  get screenMiddleToCorner(): number {
    return Math.sqrt(Math.pow(window.innerHeight, 2) + Math.pow(window.innerWidth, 2))/2;
  }

  get loadingText(): string {
    return Math.trunc(this.percentComplete*100) + '%';
  }

  get percentComplete(): number {
    return this.circleDiameter / this.screenMiddleToCorner;
  }

  get fuelSize(): number {
    return this.circleDiameter * 0.2 + this.screenMiddleToCorner * 0.1;
  }

  //Functions
  addFuelCircles(): void {
    let direction: string = this.generateRandomDirection();
    let fuel: Fuel = this.generateFuel(this.fuelCircles.length, direction);
    console.log(this.fuelCircles);
    this.fuelCircles.push(fuel);
    console.log(this.fuelCircles);
    this.setFuelEndLocation(fuel);
    setTimeout(() => { this.increaseMainCircleSize(fuel) }, 2000 * (1-this.percentComplete));
    setTimeout(() => { this.addFuelCircles() }, 300);
  }

  generateFuel(fuelIndex: number, direction: string): Fuel {
    let fuelId: string = 'fuel' + fuelIndex;
    if (direction === "Left")
      return new Fuel(fuelId, direction, this.fuelSize, 0 - this.fuelSize - 10, Math.random() * window.innerHeight);
    else if (direction === "Top")
      return new Fuel(fuelId, direction, this.fuelSize, Math.random() * window.innerWidth, 0 - this.fuelSize - 10);
    else if (direction === "Right")
      return new Fuel(fuelId, direction, this.fuelSize, window.innerWidth + this.fuelSize + 10, Math.random() * window.innerHeight);
    else
      return new Fuel(fuelId, direction, this.fuelSize, Math.random() * window.innerWidth, window.innerWidth + this.fuelSize + 10);
  }

  generateRandomDirection(): string {
    let direction: number = Math.round(Math.random()*3);
    if (direction === 0)
      return "Left";
    else if (direction === 1)
      return "Top";
    else if (direction === 2)
      return "Right";
    else
      return "Bottom";
  }

  setFuelEndLocation(fuel: Fuel): void {
    let fuelElement: HTMLElement = document.getElementById(fuel.id);

    if (fuelElement === null){
      setTimeout(() => { this.setFuelEndLocation(fuel) }, 100);
      return;
    }

    let endingLeft = window.innerWidth / 2 - fuel.size / 2;
    let endingTop = window.innerHeight / 2 - fuel.size / 2;
    let endingBuffer = this.circleDiameter / 2;
    if (fuel.direction === "Top")
      endingTop += endingBuffer;
    else if (fuel.direction === "Left")
      endingLeft += endingBuffer;
    else if (fuel.direction === "Right")
      endingLeft -= endingBuffer;
    else
      endingTop -= endingBuffer;

    fuelElement.style.left = Math.round(endingLeft) + 'px';
    fuelElement.style.top = Math.round(endingTop) + 'px';
  }

  increaseMainCircleSize(fuel: Fuel): void {
    let mainCircleVolume = this.diameterToArea(this.circleDiameter);
    let fuelVolume = this.diameterToArea(fuel.size);
    this.circleDiameter = this.areaToDiameter(mainCircleVolume + fuelVolume);
    this.updateMainCircle();
  }

  diameterToArea(diameter: number): number {
    return Math.PI * Math.pow(diameter/2, 2);
  }
  
  areaToDiameter(area: number): number {
    return 2 * Math.sqrt(area / Math.PI);
  }

  updateMainCircle(): void {
    let mainCircleSize: string = Math.round(this.circleDiameter) + "px";
    this.mainCircle.style.height = mainCircleSize;
    this.mainCircle.style.width = mainCircleSize;
  }
}
