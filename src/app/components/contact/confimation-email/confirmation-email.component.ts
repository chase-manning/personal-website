import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-confirmation-email",
  templateUrl: "./confirmation-email.component.html",
  styleUrls: ["./confirmation-email.component.css"],
})
export class ConfirmationEmailComponent implements OnInit {
  @Input() name: string;

  constructor() {}

  ngOnInit() {}
}
