import { Component, OnInit, HostListener, ViewContainerRef, ComponentFactoryResolver, ViewChild } from '@angular/core';
import { trigger,  style, transition, animate, query, group, state } from '@angular/animations';
import { SectionService } from 'src/app/services/section.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  animations: [
    trigger('showHide', [
      transition('hide => show', [
        style({ transform: 'translateX(100%)' }),
        animate('400ms ease-out', style({ transform: 'translateX(0%)' }))
      ]),
      transition('show => hide', [
        style({ transform: 'translateX(0%)' }),
        animate('400ms ease-out', style({ transform: 'translateX(-100%)' }))
      ])
    ])
  ]
})
export class AboutComponent implements OnInit {

  @ViewChild('designTab', { read: ViewContainerRef }) designContainer: ViewContainerRef;
  loading;

  educations = [
    {
      schoolName: "SMP Islamiyah Ciputat",
      expertise: null,
      since: '2011-2014'
    },
    {
      schoolName: "SMK Islamiyah Ciputat",
      expertise: 'Teknik Komputer Dan Jaringan',
      since: '2014-2017'
    },
    {
      schoolName: "Universitas Pamulang",
      expertise: 'Teknik Informatika',
      since: '2017-Sekarang'
    }
  ];

  experiences = [
    {
      place: "Pengajian Pondok Benda Indah",
      jobTitle: "Freelance",
      jobPart: "Full Stack Web Developer",
      duration: "1 Tahun",
      responsibilities: [
        'Membuat website SIAKAD dan forum untuk pengajian'
      ],
      year: '2018-2019',
      link: 'http://kbmproject.herokuapp.com'
    },
    {
      place: "Sekolah Swasta",
      jobTitle: "Freelance",
      jobPart: "Full Stack Web Developer",
      duration: "On going",
      responsibilities: [
        'Membuat website ujian online untuk sekolah'
      ],
      year: '2020-Sekarang',
      link: 'http://cbtexam.herokuapp.com'
    }
  ]

  SWIPE_ACTION = { LEFT: 'swipeleft', RIGHT: 'swiperight' };

  activeIndex: number = 0;

  Tabs = [
    {
      'id': 1,
      'name': 'Web Apps',
      'toggle': true
    },
    {
      'id': 2,
      'name': 'Dekstop Apps',
      'toggle': false
    },
    {
      'id': 3,
      'name': 'Design',
      'toggle': false
    },
    {
      'id': 4,
      'name': 'Ongoing Project',
      'toggle': false
    }
  ];

  @HostListener('window:scroll', ['onWindowScroll($event)'])
  onWindowScroll(event) {
    if(window.pageYOffset >= 0 && window.pageYOffset < 1700) {
      this.sectionService.setActiveSection('Profile');
    } else if(window.pageYOffset >= 1700 && window.pageYOffset < 2100) {
      this.sectionService.setActiveSection('Experience')
    } else if(window.pageYOffset >= 2300 && window.pageYOffset < 3000 ) {
      this.sectionService.setActiveSection('Education');
    } else if(window.pageYOffset >= 3000) {
      this.sectionService.setActiveSection('Portofolio');
    }
  }

  constructor(private sectionService: SectionService,
              private componentFactory: ComponentFactoryResolver) { }

  ngOnInit(): void {
  }


  swipe(event, currentIndex = 1) {
    
    if(event.type == this.SWIPE_ACTION.LEFT) {
      currentIndex == this.Tabs.length  ? this.toggleTab(1) : this.toggleTab(currentIndex + 1);
    } else if(event.type == this.SWIPE_ACTION.RIGHT) {
      currentIndex == 1 ? this.toggleTab(this.Tabs.length) : this.toggleTab(currentIndex - 1);   
    }
  }

  toggleTab(id: number): void {
    let activeTab = this.Tabs.find(e => e.id == id);
    activeTab.toggle = true;

    let filterTabs = this.Tabs.filter(e => e.id != id);

    filterTabs.forEach(tab => {
      tab.toggle = false;
    })

    id == 3 ? this.getDesignComponent() : this.designContainer.clear();
    
    this.activeIndex = activeTab.id;
  }

  async getDesignComponent() {
    this.loading = true;
    const { GallerizeComponent } = await import('../gallerize/gallerize.component');
    this.designContainer.createComponent(this.componentFactory.resolveComponentFactory(GallerizeComponent));
  }

}
