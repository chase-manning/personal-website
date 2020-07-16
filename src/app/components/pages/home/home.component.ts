import { Component, OnInit } from "@angular/core";
import { Title, Meta } from "@angular/platform-browser";
import { HostListener } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  isMobile: boolean = false;
  backgroundEnabled: boolean = false;
  loadingEnabled: boolean = true;

  @HostListener("window:resize", ["$event"])
  onResize(): void {
    this.setIsMobile();
  }

  constructor(private title: Title, private meta: Meta) {
    this.setIsMobile();
  }

  setIsMobile(): void {
    this.isMobile = window.innerWidth < 520;
  }

  ngOnInit() {
    this.title.setTitle("Chase Manning Freelance Developer");
    this.meta.updateTag({
      name: "description",
      content:
        "Let's Create Something Incredible Together! I'm Chase, a Freelance Developer who can't wait to hear about your exciting project!",
    });
  }

  enableBackground(): void {
    this.backgroundEnabled = true;
  }

  disableLoading(): void {
    this.loadingEnabled = false;
  }
}
