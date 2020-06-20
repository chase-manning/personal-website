import { Component, OnInit } from "@angular/core";
import { Title, Meta } from "@angular/platform-browser";

@Component({
  selector: "app-portfolio",
  templateUrl: "./portfolio.component.html",
  styleUrls: ["./portfolio.component.css"],
})
export class PortfolioComponent implements OnInit {
  constructor(private title: Title, private meta: Meta) {}

  ngOnInit() {
    this.title.setTitle("Portfolio of Chase Manning");
    this.meta.updateTag({
      name: "description",
      content:
        "The Portfolio of Chase Manning, Freelance Developer. Including Web and Movile Development Projects",
    });
  }
}
