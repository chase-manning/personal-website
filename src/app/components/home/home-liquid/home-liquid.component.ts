import { Component, OnInit } from "@angular/core";
import { HostListener } from "@angular/core";

@Component({
  selector: "app-home-liquid",
  templateUrl: "./home-liquid.component.html",
  styleUrls: ["./home-liquid.component.css"],
})
export class HomeLiquidComponent implements OnInit {
  svgScale: number;

  @HostListener("window:resize", ["$event"])
  onResize(event?) {
    this.svgScale = window.innerWidth / 580;
  }

  constructor() {
    this.svgScale = window.innerWidth / 580;
  }

  ngOnInit() {}
}
