import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-not-found",
  templateUrl: "./not-found.component.html",
  styleUrls: ["./not-found.component.css"],
})
export class NotFoundComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  kittens(): void {
    window.open("https://www.youtube.com/watch?v=SB-qEYVdvXA&t=10s", "_blank");
  }
}
