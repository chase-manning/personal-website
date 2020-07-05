import { Component, OnInit } from "@angular/core";
import { Title, Meta } from "@angular/platform-browser";

@Component({
  selector: "app-services",
  templateUrl: "./services.component.html",
  styleUrls: ["./services.component.css"],
})
export class ServicesComponent implements OnInit {
  constructor(private title: Title, private meta: Meta) {}

  ngOnInit() {
    this.title.setTitle("Chase Manning Services");
    this.meta.updateTag({
      name: "description",
      content:
        "The Services of Chase Manning, Freelance Developer. Including Web, Movile and Back End Development",
    });
  }
}
