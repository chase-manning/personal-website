import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isSticky: boolean = false;

  @HostListener('window:scroll', [])
  checkScroll() {
    this.isSticky = window.pageYOffset > 0;
  }

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
