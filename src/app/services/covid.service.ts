import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CovidService {

  endpoint: string = 'https://disease.sh/v3/covid-19/countries';

  constructor(private http: HttpClient) { }

  handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Error code: ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  }

  getIndonesian(): Observable<any> {
    return this.http.get(`${this.endpoint}/indonesia`).pipe(
      catchError(this.handleError)
    )
  }

  getAll(): Observable<any> {
    return this.http.get(this.endpoint).pipe(
      catchError(this.handleError)
    )
  }
}
