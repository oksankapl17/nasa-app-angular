import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Observable, throwError} from 'rxjs';
import {EpicPhoto} from '../interfaces';
import {environment} from '../../environments/environment';
import {catchError, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EpicService {
  apiUrl = 'https://api.nasa.gov/EPIC/api/natural/date';

  constructor(private http: HttpClient, private snackBar: MatSnackBar) {
  }

  getEpicPhotos(params: { epicDate: string }): Observable<EpicPhoto[]> {
    const {epicDate} = params;
    const reqParams = new HttpParams().appendAll({ api_key: environment.apiKey});
    const url = `${this.apiUrl}/${epicDate}`;
    return this.http.get<EpicPhoto[]>(url, {params: reqParams})
      .pipe(
        catchError(e => {
          this.snackBar.open(e.message);
          return throwError(e);
        }),
        map((res: any) => {
          return res;
        })
      );
  }

}
