import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError, retry } from "rxjs/operators";

export class EmailData {
  email: string;
  subject: string;
  text: string;
  html: string;
}

@Injectable({
  providedIn: "root",
})
export class EmailService {
  emailUrl: string = "http://chasemanning.co.nz/api/email";
  //emailUrl: string =
  "http://localhost:5001/chase-manning-portfolio/us-central1/email";

  constructor(private http: HttpClient) {}

  sendEmail(emailData: EmailData): Observable<string> {
    console.log("Meow");
    return this.http.post<string>(this.emailUrl, emailData);
  }
}
