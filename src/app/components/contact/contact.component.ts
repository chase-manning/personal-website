import { Component, OnInit } from "@angular/core";
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.css"],
})
export class ContactComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  test(): void {
    firebase.initializeApp({
      apiKey: "AIzaSyDpw02MMAvMb-O6JJmmQnhmhGeMuGJRut0",
      authDomain: "chase-manning-portfolio.firebaseapp.com",
      projectId: "chase-manning-portfolio",
    });

    var db = firebase.firestore();

    db.collection("contacts")
      .add({
        name: "Lovelace2",
        message: "Hi there, you are so cool!",
        email: "chase@sharpcurrent.com",
        from: "chase@sharpcurrent.com",
        subject: "Thanks for Messaging Me!",
        html: "<b>Test HTML</b><br/><p style='color:red;'>Meow</p>",
      })
      .then(function (docRef) {
        console.log("Document written with ID: ", docRef.id);
      })
      .catch(function (error) {
        console.error("Error adding document: ", error);
      });
  }
}
