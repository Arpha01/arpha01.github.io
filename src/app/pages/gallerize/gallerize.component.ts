import { Component, OnInit } from '@angular/core';
import { Gallery, ImageItem } from 'ng-gallery';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-gallerize',
  templateUrl: './gallerize.component.html',
  styleUrls: ['./gallerize.component.css']
})
export class GallerizeComponent implements OnInit {

  constructor(private gallery: Gallery) { }

  assetsPath: string = `http://${location.host}/assets/images/design`;
  loading: boolean = true;
  imagesPath: ImageItem[] = [];
  myImages = [];
  
  onVisible() {
    //console.log('visible');
  }

  onLoaded() {
    this.loading = false;
  }

  ngOnInit(): void {
    const galleryRef = this.gallery.ref('gallery');

    this.gallery.ref('lightbox').setConfig({
      loadingStrategy: 'lazy',
      thumb: false,
    })

    this.imagesPath = [
      new ImageItem({
        'src': `${this.assetsPath}/waktushalat_welcome_material-min.png`,
      }),
      new ImageItem({
        'src': `${this.assetsPath}/waktushalat_double_material-min.png`,
      }),
      new ImageItem({
        'src': `${this.assetsPath}/rentalmobil_login_material-min.png`,
      }),
      new ImageItem({
        'src': `${this.assetsPath}/planttree_flat-min.png`,
      }),
      new ImageItem({
        'src': `${this.assetsPath}/recipe_login_material-min.png`,
      }),
      new ImageItem({
        'src': `${this.assetsPath}/webblock_fluent-min.png`,
      }),
      new ImageItem({
        'src': `${this.assetsPath}/web/Artboard – 1-min.png`,
      }),
      new ImageItem({
        'src': `${this.assetsPath}/web/Artboard – 2-min.png`,
      }),
      new ImageItem({
        'src': `${this.assetsPath}/web/Artboard – 3-min.png`,
      }),
      new ImageItem({
        'src': `${this.assetsPath}/web/Artboard – 5-min.png`,
      }),
    ]

    galleryRef.addImage(this.imagesPath);

  }

}
