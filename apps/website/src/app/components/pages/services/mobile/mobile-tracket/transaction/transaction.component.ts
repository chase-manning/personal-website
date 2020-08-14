import { Component, OnInit, Input } from "@angular/core";
import { TransactionRow } from "./transaction-row/transaction-row.component";

export class Transaction {
  transactionRows: TransactionRow[];
}

@Component({
  selector: "app-transaction",
  templateUrl: "./transaction.component.html",
  styleUrls: ["./transaction.component.css"],
})
export class TransactionComponent implements OnInit {
  @Input() transaction: Transaction;

  constructor() {}

  ngOnInit(): void {}
}
