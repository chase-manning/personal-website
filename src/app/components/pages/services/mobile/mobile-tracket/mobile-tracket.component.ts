import { Component, OnInit } from "@angular/core";
import { Card } from "./card/card.component";
import { Transaction } from "./transaction/transaction.component";
import { HostListener } from "@angular/core";

@Component({
  selector: "app-mobile-tracket",
  templateUrl: "./mobile-tracket.component.html",
  styleUrls: ["./mobile-tracket.component.css"],
})
export class MobileTracketComponent implements OnInit {
  @HostListener("window:scroll", ["$event"])
  onScroll() {
    let cards = document.getElementsByClassName("card__container")[0];
    setTimeout(() => cards.classList.add("card__animation"), 500);
    let transactions = document.getElementsByClassName(
      "transaction__container"
    )[0];
    setTimeout(() => transactions.classList.add("transaction__animation"), 500);
  }

  cards: Card[] = [
    {
      color1: "#5c00d1",
      color2: "#8200d1",
      color3: "#a74ddf",
      color4: "#3e244e",
      number: "3923 2923 2934 2393",
      balance: "$2,345",
      expiry: "02/23",
    },
    {
      color1: "#F6B7CE",
      color2: "#4F78E0",
      color3: "#6d90e8",
      color4: "#303778",
      number: "3923 8989 7321 1112",
      balance: "-$89",
      expiry: "04/21",
    },
    {
      color1: "#F8D302",
      color2: "#97C320",
      color3: "#63BA2C",
      color4: "#10AD55",
      number: "1662 8712 1566 6533",
      balance: "$321",
      expiry: "09/22",
    },
    {
      color1: "#F6B7CE",
      color2: "#4F78E0",
      color3: "#6d90e8",
      color4: "#303778",
      number: "3923 8989 7321 1112",
      balance: "$321",
      expiry: "09/22",
    },
  ];

  transactions: Transaction[] = [
    {
      transactionRows: [
        {
          category: "Travel",
          description: "Air NZ Tickets",
          price: "-$789.34",
          date: "05 Jun, 7:45pm",
        },
        {
          category: "Travel",
          description: "Travel Insurance",
          price: "-$96.00",
          date: "04 Jun, 4:23pm",
        },
        {
          category: "Food",
          description: "Sea Breeze Diner",
          price: "-$136.76",
          date: "26 May, 9:23pm",
        },
        {
          category: "Food",
          description: "Mc Donald's",
          price: "-$23.21",
          date: "20 May, 1:23am",
        },
      ],
    },
    {
      transactionRows: [
        {
          category: "Meow",
          description: "Air NZ Tickets",
          price: "-$789.34",
          date: "05 Jun, 7:45pm",
        },
        {
          category: "Travel",
          description: "Travel Insurance",
          price: "-$96.00",
          date: "04 Jun, 4:23pm",
        },
        {
          category: "Food",
          description: "Sea Breeze Diner",
          price: "-$136.76",
          date: "26 May, 9:23pm",
        },
        {
          category: "Food",
          description: "Mc Donald's",
          price: "-$23.21",
          date: "20 May, 1:23am",
        },
      ],
    },
  ];

  constructor() {}

  ngOnInit() {}
}
