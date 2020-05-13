import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio-server',
  templateUrl: './portfolio-server.component.html',
  styleUrls: ['./portfolio-server.component.css']
})
export class PortfolioServerComponent implements OnInit {

  topSectionLayers: number[] = []

  constructor() { 
    for (var i = 0; i < 60; i++){ 
      this.topSectionLayers.push(i);
    }
  }

  ngOnInit() {
  }

}
