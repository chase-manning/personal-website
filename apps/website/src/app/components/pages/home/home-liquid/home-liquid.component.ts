import { Component, OnInit } from "@angular/core";
import { HostListener } from "@angular/core";

@Component({
  selector: "app-home-liquid",
  templateUrl: "./home-liquid.component.html",
  styleUrls: ["./home-liquid.component.css"],
})
export class HomeLiquidComponent implements OnInit {
  svgScaleX: number;
  svgScaleY: number;
  meow: boolean = true;

  @HostListener("window:resize", ["$event"])
  onResize(): void {
    this.setSvgScale();
  }

  constructor() {
    this.setSvgScale();
  }

  ngOnInit() {}

  setSvgScale(): void {
    this.svgScaleX = window.innerWidth / 580;
    this.svgScaleY = window.innerHeight / 400;
  }
}
