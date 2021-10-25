import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable, throwError} from 'rxjs';
import {RoverPhotosResponse} from '../interfaces';
import {catchError} from 'rxjs/operators';
import {MatSnackBar} from '@angular/material/snack-bar';


@Injectable({
  providedIn: 'root'
})
export class RoversService {

  constructor(private http: HttpClient, private snackBar: MatSnackBar) {
  }

  public getRoverPhotos(params: { rover: string; camera: string; sol: number }): Observable<RoverPhotosResponse> {
    const {rover, camera, sol} = params;
    const reqParams = new HttpParams().appendAll({sol, camera, api_key: environment.apiKey});
    const url = `${environment.apiUrl}/${rover}/photos`;
    return this.http.get<RoverPhotosResponse>(url, {params: reqParams})
      .pipe(
        catchError(e => {
          this.snackBar.open(e.message);
          return throwError(e);
        })
      );
  }
}
