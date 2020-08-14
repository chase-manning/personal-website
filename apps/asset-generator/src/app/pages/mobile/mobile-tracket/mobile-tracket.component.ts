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
  constructor() {}

  ngOnInit() {
    if (!this.isMobile) setTimeout(() => this.startAnimations(), 1000);
  }

  @HostListener("window:scroll", ["$event"])
  onScroll() {
    this.startAnimations();
  }

  get isMobile(): boolean {
    return window.innerWidth < 520;
  }

  startAnimations(): void {
    let cards = document.getElementsByClassName("card__container")[0];
    setTimeout(() => cards.classList.add("card__animation"), 1000);
    let transactions = document.getElementsByClassName(
      "transaction__container"
    )[0];
    setTimeout(
      () => transactions.classList.add("transaction__animation"),
      1000
    );
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
      color1: "#F8D302",
      color2: "#97C320",
      color3: "#63BA2C",
      color4: "#10AD55",
      number: "3923 8989 7321 1112",
      balance: "-$89",
      expiry: "04/21",
    },
    {
      color1: "#F6B7CE",
      color2: "#4F78E0",
      color3: "#6d90e8",
      color4: "#303778",
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
          category: "Gifts",
          description: "Tina's Jewelry",
          price: "-$229.99",
          date: "20 May, 1:23am",
        },
      ],
    },
    {
      transactionRows: [
        {
          category: "Entertainment",
          description: "Netflix Subscription",
          price: "-$19.99",
          date: "01 Jun, 12:03pm",
        },
        {
          category: "Work",
          description: "G Suite Subscription",
          price: "-$41.23",
          date: "02 Jun, 1:13pm",
        },
        {
          category: "Credit",
          description: "Account Topup",
          price: "$80.00",
          date: "15 May, 4:11pm",
        },
        {
          category: "Entertainment",
          description: "Netflix Subscription",
          price: "-$19.99",
          date: "01 May, 12:03pm",
        },
      ],
    },
    {
      transactionRows: [
        {
          category: "Entertainment",
          description: "Hoyts Cinema",
          price: "-$16.00",
          date: "05 Jun, 7:45pm",
        },
        {
          category: "Food",
          description: "Chow Down Cafe",
          price: "-$23.32",
          date: "04 Jun, 4:23pm",
        },
        {
          category: "Food",
          description: "KFC Ltd",
          price: "-$18.23",
          date: "26 May, 9:23pm",
        },
        {
          category: "Entertainment",
          description: "City VR",
          price: "-$30.00",
          date: "20 May, 1:23pm",
        },
      ],
    },
  ];
}
