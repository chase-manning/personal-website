import { Injectable } from "@angular/core";

declare let gtag: Function;

@Injectable({
  providedIn: "root",
})
export class GoogleAnalyticsService {
  constructor() {}

  eventEmitter(
    eventName: string,
    eventCategory: string,
    eventAction: string,
    eventLabel: string
  ): void {
    gtag("event", eventName, {
      eventCategory: eventCategory,
      eventLabel: eventLabel,
      eventAction: eventAction,
    });
  }

  trackConversion(): void {
    gtag("event", "conversion", {
      send_to: "AW-661071687/9hJKCJWoitcBEMfOnLsC",
    });
  }
}