import { NgxSpinnerModule } from 'ngx-spinner';
import { BrowserModule, HammerGestureConfig, HAMMER_GESTURE_CONFIG, HammerModule } from '@angular/platform-browser';
import { NgModule, Injectable, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { GeneralLayoutComponent } from './layouts/general-layout/general-layout.component';
import { AboutLayoutComponent } from './layouts/about-layout/about-layout.component';
import { AboutNavbarComponent } from './components/about-navbar/about-navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import * as Hammer from 'hammerjs';
import { WinnetmeterComponent } from './pages/winnetmeter/winnetmeter.component';
import { QrcodeComponent } from './pages/qrcode/qrcode.component';
import { CoronavirusComponent } from './pages/coronavirus/coronavirus.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ChecksumcheckComponent } from './pages/checksumcheck/checksumcheck.component';
import { DonationComponent } from './pages/donation/donation.component';
import { GallerizeComponent } from './pages/gallerize/gallerize.component';
import { ObserverVisibilityDirective } from './observer-visibility.directive';
import { WaktushalatComponent } from './pages/waktushalat/waktushalat.component';
import { ImagesComponent } from './components/images/images.component';
import { GalleryModule, GALLERY_CONFIG } from 'ng-gallery';

@Injectable()
export class MyHammerConfig extends HammerGestureConfig {
  overrides = <any> {
    'swipe': { direction: Hammer.DIRECTION_HORIZONTAL },
    'pinch': { enable: false },
    'rotate': { enable: false },
    'pan': { enable: false }
  };
}

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    GeneralLayoutComponent,
    AboutLayoutComponent,
    AboutNavbarComponent,
    WinnetmeterComponent,
    QrcodeComponent,
    CoronavirusComponent,
    ChecksumcheckComponent,
    DonationComponent,
    GallerizeComponent,
    ObserverVisibilityDirective,
    WaktushalatComponent,
    ImagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HammerModule,
    HttpClientModule,
    NgxDatatableModule,
    NgxSpinnerModule,
    GalleryModule
  ],
  providers: [
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: MyHammerConfig
    },
    {
      provide: GALLERY_CONFIG,
      useValue: {
        imageSize: 'cover'
      }
    }
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],  
  bootstrap: [AppComponent]
})
export class AppModule { }
