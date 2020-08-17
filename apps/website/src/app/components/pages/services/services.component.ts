import { Component, OnInit, AfterViewInit } from "@angular/core";
import { GoogleOptimizeService } from "../../../services/google-optimize.service";

@Component({
  selector: "app-services",
  templateUrl: "./services.component.html",
  styleUrls: ["./services.component.css"],
})
export class ServicesComponent implements OnInit, AfterViewInit {
  constructor(private googleOptimizeService: GoogleOptimizeService) {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.googleOptimizeService.triggerActivationEvent();
  }
}
