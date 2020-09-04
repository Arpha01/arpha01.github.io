import { Component, OnInit, HostListener, ViewChild, ElementRef } from '@angular/core';
import { SectionService } from 'src/app/services/section.service';

@Component({
  selector: 'app-about-navbar',
  templateUrl: './about-navbar.component.html',
  styleUrls: ['./about-navbar.component.css']
})
export class AboutNavbarComponent implements OnInit {

  @ViewChild('navbar') navbarElement: ElementRef;

  toggleNav: boolean;

  activeSection: string;

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

  constructor(private sectionService: SectionService) { }

  ngOnInit(): void {
    this.sectionService.activeSection$.subscribe(active => {
      this.activeSection = active;
    })
  }

}
