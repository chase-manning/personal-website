import { Component, OnInit } from "@angular/core";
import { Title, Meta } from "@angular/platform-browser";

@Component({
  selector: "app-not-found",
  templateUrl: "./not-found.component.html",
  styleUrls: ["./not-found.component.css"],
})
export class NotFoundComponent implements OnInit {
  constructor(private title: Title, private meta: Meta) {}

  ngOnInit(): void {
    this.title.setTitle("Page Not Found");
    this.meta.updateTag({
      name: "description",
      content:
        "Looks like you are a bit lost! It's okay you can go home now, or...",
    });
  }

  kittens(): void {
    window.open("https://www.youtube.com/watch?v=SB-qEYVdvXA&t=10s", "_blank");
  }
}
