import { Component, OnInit } from "@angular/core";
import { Title, Meta } from "@angular/platform-browser";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.css"],
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  validated: boolean = false;

  constructor(
    private title: Title,
    private meta: Meta,
    private formBuilder: FormBuilder
  ) {
    this.contactForm = this.formBuilder.group({
      name: ["", Validators.required],
      email: ["", Validators.required],
      message: ["", Validators.required],
    });
  }

  ngOnInit() {
    this.title.setTitle("Contact Chase Manning");
    this.meta.updateTag({
      name: "description",
      content:
        "Contact Chase Manning, Freelance Developer for help with your Web or Mobile Development project.",
    });
  }

  onSubmit(contactData): void {
    this.validated = true;
    if (contactData.name + contactData.email + contactData.message == "")
      return;
    this.sendEmail(contactData.name, contactData.email, contactData.message);
  }

  sendEmail(name: string, email: string, message: string): void {
    var confirmationEmailElement = document.getElementById("confirmationEmail");

    firebase.initializeApp({
      authDomain: "chase-manning-portfolio.firebaseapp.com",
      projectId: "chase-manning-portfolio",
    });

    var db = firebase.firestore();

    db.collection("contacts")
      .add({
        name: name,
        message: message,
        email: email,
        from: "chase",
        subject: "Thanks for Messaging Me!",
        html: confirmationEmailElement.innerHTML,
      })
      .then(function (docRef) {
        console.log("Document written with ID: ", docRef.id);
      })
      .catch(function (error) {
        console.error("Error adding document: ", error);
      });
  }
}
