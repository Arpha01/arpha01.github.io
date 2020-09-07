import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CovidService } from '../../services/covid.service';
import { Case } from '../../models/case.model';
import * as moment from 'moment';
import { ColumnMode } from '@swimlane/ngx-datatable'
import { DatatableComponent } from '@swimlane/ngx-datatable/lib/components/datatable.component';

@Component({
  selector: 'app-coronavirus',
  templateUrl: './coronavirus.component.html',
  styleUrls: ['./coronavirus.component.css']
})
export class CoronavirusComponent implements OnInit {

  cases: Case[] = [];
  indonesianCases: Case;

  @ViewChild('covidTable') tableElement: DatatableComponent;

  dtColumns = [{ prop: 'Negara' }, { prop: 'Total' }, { prop: 'Positif' }, { prop: 'Meninggal' }, { prop: 'Sembuh' }];
  dtRows = [];
  data = [];
  dtColumnMode = ColumnMode;

  constructor(private covidService: CovidService) { }

  ngOnInit(): void {

    this.covidService.getIndonesian().subscribe((res: any) => {
      this.indonesianCases = res;
    });

    this.covidService.getAll().subscribe((res: any) => {
      this.cases = res;
  
      this.cases.forEach(item => {
        let dtItem = {
          Negara: item.country,
          Total: item.cases,
          Positif: item.active,
          Meninggal: item.deaths,
          Sembuh: item.recovered,
        }

        this.dtRows.push(dtItem);
      })

      this.data = this.dtRows;
    });

  }

  translateToDate(date: number): string {
    let updated = new Date(date);
   
    return moment.utc(updated).toLocaleString();
  }

  filter(event) {
    const val = event.target.value.toLowerCase();

    this.dtRows = this.data.filter(row => {
      return row.Negara.toLowerCase().indexOf(val) !== -1 || !val; 
    });

    this.tableElement.offset = 0;
  }

}
