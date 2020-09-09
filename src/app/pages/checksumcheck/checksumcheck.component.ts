import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checksumcheck',
  templateUrl: './checksumcheck.component.html',
  styleUrls: ['./checksumcheck.component.css']
})
export class ChecksumcheckComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  openPage(url: string): void {
    window.open(url);
  }

}
