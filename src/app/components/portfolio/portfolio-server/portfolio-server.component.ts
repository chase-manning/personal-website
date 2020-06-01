import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-portfolio-server",
  templateUrl: "./portfolio-server.component.html",
  styleUrls: ["./portfolio-server.component.css"],
})
export class PortfolioServerComponent implements OnInit {
  topSectionLayerCount: number = 60;

  topSectionLayers: number[] = [];

  constructor() {
    for (var i = 0; i < this.topSectionLayerCount; i++) {
      this.topSectionLayers.push(i);
    }
  }

  ngOnInit() {}
}
