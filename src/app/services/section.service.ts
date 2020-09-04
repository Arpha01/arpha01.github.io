import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SectionService {

  private activeSection = new Subject<string>();

  constructor() { }

  activeSection$ = this.activeSection.asObservable();

  setActiveSection(section: string) {
    this.activeSection.next(section);
  }
}
