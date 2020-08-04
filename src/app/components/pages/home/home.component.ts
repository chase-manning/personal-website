import { Component, OnInit } from "@angular/core";
import { Title, Meta } from "@angular/platform-browser";
import { HostListener } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  constructor(private title: Title, private meta: Meta) {}

  ngOnInit() {
    this.title.setTitle("Chase Manning Freelance Developer");
    this.meta.updateTag({
      name: "description",
      content:
        "Let's Create Something Incredible Together! I'm Chase, a Freelance Developer who can't wait to hear about your exciting project!",
    });
  }
}
