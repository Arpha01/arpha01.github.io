import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { GeneralLayoutComponent } from './layouts/general-layout/general-layout.component';
import { AboutLayoutComponent } from './layouts/about-layout/about-layout.component';
import { AboutComponent } from './pages/about/about.component';
import { GallerizeComponent } from './pages/gallerize/gallerize.component';


const routes: Routes = [
  {
    'path': '',
    'component': GeneralLayoutComponent,
    'children': [
      {
        'path': '',
        'component': HomeComponent,
        'pathMatch': 'full'
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
      },
      {
        'path': 'gallerize',
        'component': GallerizeComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
