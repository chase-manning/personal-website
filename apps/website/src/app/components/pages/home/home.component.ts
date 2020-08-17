import { Component, OnInit, AfterViewInit } from "@angular/core";
import { GoogleOptimizeService } from "../../../services/google-optimize.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit, AfterViewInit {
  constructor(private googleOptimizeService: GoogleOptimizeService) {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.googleOptimizeService.triggerActivationEvent();
  }
}
