import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-waktushalat',
  templateUrl: './waktushalat.component.html',
  styleUrls: ['./waktushalat.component.css']
})
export class WaktushalatComponent implements OnInit {

  constructor() { }

  @ViewChild('windows') windowsCard: ElementRef;
  @ViewChild('android') androidCard: ElementRef;
  @ViewChild('pwa') pwaCard: ElementRef;

  @HostListener('window:scroll', ['onWindowScroll($event)']) 
    onWindowScroll(event) {
      if(window.pageYOffset > 2300) {

        //animate windows card
        this.windowsCard.nativeElement.classList.add('animate__animated');
        this.windowsCard.nativeElement.classList.add('animate__fadeInUp');

        //animate android card
        this.androidCard.nativeElement.classList.add('animate__animated');
        this.androidCard.nativeElement.classList.add('animate__fadeInUp');

        //animate pwa card
        this.pwaCard.nativeElement.classList.add('animate__animated');
        this.pwaCard.nativeElement.classList.add('animate__fadeInUp');
      }
    }

  ngOnInit(): void {
  }

}
