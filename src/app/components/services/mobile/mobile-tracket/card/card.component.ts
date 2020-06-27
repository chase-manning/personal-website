import { Component, OnInit, Input } from "@angular/core";

export class Card {
  color1: string;
  color2: string;
  color3: string;
  color4: string;
  number: string;
  balance: string;
  expiry: string;
}

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.css"],
})
export class CardComponent implements OnInit {
  @Input() card: Card;

  constructor() {}

  ngOnInit(): void {}
}
