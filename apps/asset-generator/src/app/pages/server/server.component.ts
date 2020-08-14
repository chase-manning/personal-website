import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-server",
  templateUrl: "./server.component.html",
  styleUrls: ["./server-animations.component.css", "./server.component.css"],
})
export class ServerComponent implements OnInit {
  bigSectionLayerCount: number = 60;
  middleSectionLayerCount: number = 21;

  bigSectionLayers: number[] = [];
  middleSectionLayers: number[] = [];

  constructor() {
    for (var i = 0; i < this.bigSectionLayerCount; i++) {
      this.bigSectionLayers.push(i);
    }

    for (var i = 0; i < this.middleSectionLayerCount; i++) {
      this.middleSectionLayers.push(i);
    }
  }

  ngOnInit() {}
}
