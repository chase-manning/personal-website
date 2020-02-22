import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {

  //Settings
  private mainCircleStartingSize: number = 100;

  //Elements
  private mainCircle: HTMLElement;

  //Status
  private percentComplete: number = 0;

  constructor() { }

  ngOnInit() {
    this.mainCircle = document.querySelector('.circle') as HTMLElement;
    this.updateMainCircle();
  }

  //Getters
  get screenMaxDimension(): number {
    return Math.max(window.outerWidth, window.outerWidth);
  }

  get loadingText(): string {
    return Math.trunc(this.percentComplete*100) + '%';
  }

  //Functions
  updateMainCircle(): void {
    let mainCircleSize: string = this.mainCircleStartingSize + (this.screenMaxDimension - this.mainCircleStartingSize) * this.percentComplete + "px";
    this.mainCircle.style.height = mainCircleSize;
    this.mainCircle.style.width = mainCircleSize;
  }

}
