import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

export class ContactData {
  name: string;
  email: string;
  message: string;
}

@Injectable({
  providedIn: "root",
})
export class EmailService {
  emailUrl: string = "https://chasemanning.co.nz/api/email";

  constructor(private http: HttpClient) {}

  sendEmail(contactData: ContactData): Observable<string> {
    return this.http.post<string>(this.emailUrl, contactData);
  }
}
