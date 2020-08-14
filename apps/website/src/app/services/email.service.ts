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
  constructor(private http: HttpClient) {}

  contactEmail(contactData: ContactData): Observable<string> {
    const contactEmailUrl: string = "https://chasemanning.co.nz/api/contact";
    return this.http.post<string>(contactEmailUrl, contactData);
  }
}
