import { Component, OnInit, HostListener, ViewChild, ElementRef } from '@angular/core';
import { PwaService } from 'src/app/services/pwa.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public Pwa: PwaService) { }

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

  installPwa(): void {
    this.Pwa.promptEvent.prompt();
  }
  

}
