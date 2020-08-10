import { Component, OnInit } from "@angular/core";
import { HostListener } from "@angular/core";

@Component({
  selector: "app-services",
  templateUrl: "./services.component.html",
  styleUrls: ["./services.component.css"],
})
export class ServicesComponent implements OnInit {
  laptopScale: number;
  mobileScale: number;
  serverScale: number;

  @HostListener("window:resize", ["$event"])
  onResize(): void {
    this.setSvgScale();
  }

  ngOnInit() {}

  constructor() {
    this.setSvgScale();
  }

  get isMobile(): boolean {
    return window.innerWidth < 520;
  }

  setSvgScale(): void {
    const targetLaptopWidth = this.isMobile
      ? window.innerWidth - 32 * 2
      : (window.innerWidth - 61 * 3) / 2;
    this.laptopScale = (targetLaptopWidth - 5) / 724;
    this.mobileScale = 0.85;
  }
}
