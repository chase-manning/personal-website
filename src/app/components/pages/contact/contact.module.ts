import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ContactRoutingModule } from "./contact-routing.module";
import { ContactComponent } from "./contact.component";
import { SocialsComponent } from "./socials/socials.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    ContactRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [ContactComponent, SocialsComponent],
})
export class ContactModule {}
