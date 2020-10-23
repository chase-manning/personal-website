import { Component } from "@angular/core";
import { Router, NavigationEnd } from "@angular/router";
import { Title, Meta } from "@angular/platform-browser";

declare let gtag: Function;

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  constructor(public router: Router, private title: Title, private meta: Meta) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const route: string = event.urlAfterRedirects;
        gtag("config", "UA-169905580-1", {
          page_path: route,
        });
        this.setMetaData(route);
      }
    });
  }

  setMetaData(route: string): void {
    let title: string = "";
    let description: string = "";

    if (route === "/services") {
      title = "Chase Manning Services";
      description =
        "The Services of Chase Manning, Freelance Developer. Including Web, Movile and Back End Development";
    } else if (route === "/contact") {
      title = "Contact Chase Manning";
      description = "Connect with me and Let's Chat!";
    } else if (route === "/404") {
      title = "Page Not Found";
      description =
        "Looks like you are a bit lost! It's okay you can go home now, or...";
    } else {
      title = "Hi, I'm Chase manning";
      description =
        "I'm a Senior Full Stack Developer who has a passion for Web and Mobile. Connect with me and Let's Chat!";
    }

    this.title.setTitle(title);
    this.meta.updateTag({
      name: "description",
      content: description,
    });
  }
}
