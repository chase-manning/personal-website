import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-mobile",
  templateUrl: "./mobile.component.html",
  styleUrls: ["./mobile.component.css"],
})
export class MobileComponent implements OnInit {
  @Input() scale: number;

  constructor() {}

  ngOnInit() {}
}
