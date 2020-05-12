import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  backgroundEnabled: boolean = false;
  loadingEnabled: boolean = true;

  constructor() { }

  ngOnInit() { }

  enableBackground(): void {
    this.backgroundEnabled = true;
  }
  
  disableLoading(): void {
    this.loadingEnabled = false;
  }

}
