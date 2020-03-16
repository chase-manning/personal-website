import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  get isPortfolioPage(): boolean {
    return this.router.url === '/portfolio';
  }
  get isResumePage(): boolean {
    return this.router.url === '/resume';
  }
  get isContactPage(): boolean {
    return this.router.url === '/contact';
  }
}
