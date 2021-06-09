import { Injectable } from '@angular/core';
import { Pdv } from './pdv.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class PdvService {
  private pdvUrl = 'api/pdv/';
  constructor(private http: HttpClient) { }

  getPdvs(): Observable<Pdv[]> {
    return this.http.get<Pdv[]>(this.pdvUrl).pipe(
      retry(2),
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    );
  }

  createPdv(pdv: Pdv): Observable<Pdv> {
    return this.http.post<Pdv>(this.pdvUrl, pdv).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    )
  }

}