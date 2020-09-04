import { Component, OnInit } from '@angular/core';
import { Gallery, ImageItem, GalleryModule, GalleryRef } from 'ng-gallery';

@Component({
  selector: 'app-gallerize',
  templateUrl: './gallerize.component.html',
  styleUrls: ['./gallerize.component.css']
})
export class GallerizeComponent implements OnInit {

  constructor(private gallery: Gallery) { }

  galleryId = 'portofolioGallery';
  galleryRef: GalleryRef;
  assetsPath: string = `http://${location.host}/assets/images/design`;
  images: ImageItem[] = [];

  ngOnInit(): void {
    this.galleryRef = this.gallery.ref(this.galleryId);
    this.gallery.ref('lightbox').setConfig({
      loadingStrategy: 'lazy',
      thumb: false,
    })

    this.images = [
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

    this.galleryRef.addImage(this.images);
  }

}
