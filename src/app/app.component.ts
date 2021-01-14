import { Component, OnInit } from '@angular/core';
import { 
  Router, 
  Event as RouterEvent,
  NavigationStart,
  NavigationEnd, 
  NavigationCancel,
  NavigationError
} from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ArphaGithub';

  loading: Boolean = true;

  constructor(private router: Router, private spinner: NgxSpinnerService) {}

  ngOnInit() {
    this.spinner.show();

    this.router.events.subscribe((evt) => {
     this.navigationInterceptor(evt);
    })
  }

  navigationInterceptor(e: RouterEvent) {
    
    if(e instanceof NavigationStart) {
      this.loading = true;
    }

    if(e instanceof NavigationEnd) {
      window.scrollTo(0,0);
      this.loading = false;
    }

    if(e instanceof NavigationCancel) {
      this.loading = false;
    }

    if(e instanceof NavigationError) {
      this.loading = false;
    }
  }

}
