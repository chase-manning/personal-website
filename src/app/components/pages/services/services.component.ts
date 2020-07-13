import { Component, OnInit } from "@angular/core";
import { Title, Meta } from "@angular/platform-browser";
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

  constructor(private title: Title, private meta: Meta) {
    this.setSvgScale();
  }

  setSvgScale(): void {
    this.laptopScale = (window.innerWidth - 61 * 3) / 2 / 724;
  }

  ngOnInit() {
    this.title.setTitle("Chase Manning Services");
    this.meta.updateTag({
      name: "description",
      content:
        "The Services of Chase Manning, Freelance Developer. Including Web, Movile and Back End Development",
    });
  }
}
