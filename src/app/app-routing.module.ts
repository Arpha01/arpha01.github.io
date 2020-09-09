import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { GeneralLayoutComponent } from './layouts/general-layout/general-layout.component';
import { AboutLayoutComponent } from './layouts/about-layout/about-layout.component';
import { AboutComponent } from './pages/about/about.component';
import { WinnetmeterComponent } from './pages/winnetmeter/winnetmeter.component';
import { QrcodeComponent } from './pages/qrcode/qrcode.component';
import { CoronavirusComponent } from './pages/coronavirus/coronavirus.component';
import { ChecksumcheckComponent } from './pages/checksumcheck/checksumcheck.component';
import { DonationComponent } from './pages/donation/donation.component';


const routes: Routes = [
  {
    'path': '',
    'component': GeneralLayoutComponent,
    'children': [
      {
        'path': '',
        'component': HomeComponent,
        'pathMatch': 'full'
      },
      {
        'path': 'projects/winnetmeter',
        'component': WinnetmeterComponent,
      },
      {
        'path': 'projects/qrcode',
        'component': QrcodeComponent
      },
      {
        'path': 'covid-19',
        'component': CoronavirusComponent
      },
      {
        'path': 'projects/checksumcheck',
        'component': ChecksumcheckComponent
      },
      {
        'path': 'donation',
        'component': DonationComponent
      }
    ]
  },
  {
    'path': '',
    'component': AboutLayoutComponent,
    'children': [
      {
        'path': 'about',
        'component': AboutComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
