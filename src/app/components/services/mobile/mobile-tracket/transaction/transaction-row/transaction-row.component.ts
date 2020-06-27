import { Component, OnInit, Input } from "@angular/core";

export class TransactionRow {
  category: string;
  description: string;
  price: string;
  date: string;
}

@Component({
  selector: "app-transaction-row",
  templateUrl: "./transaction-row.component.html",
  styleUrls: ["./transaction-row.component.css"],
})
export class TransactionRowComponent implements OnInit {
  @Input() transactionRow: TransactionRow;

  constructor() {}

  ngOnInit(): void {}
}
