import { Injectable } from "@angular/core";

declare let dataLayer: any;

@Injectable({
  providedIn: "root",
})
export class GoogleOptimizeService {
  constructor() {}

  triggerActivationEvent(): void {
    dataLayer.push({ event: "optimize.activate" });
    console.log("meow");
  }
}
