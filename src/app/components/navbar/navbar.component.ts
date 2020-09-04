import { Component, OnInit, HostListener, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @ViewChild('navbar') navbarElement: ElementRef;

  toggleNav: boolean;

  @HostListener('window:scroll', ['onWindowScroll($event)'])
  onWindowScroll(event) {
    if(window.pageYOffset > 100) {
      this.navbarElement.nativeElement.classList.add('navbar-fixed');
    } else if(window.pageYOffset < 101) {
      this.navbarElement.nativeElement.classList.remove('navbar-fixed');
    }
  }

  toggle(): void {
    this.toggleNav = !this.toggleNav;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
