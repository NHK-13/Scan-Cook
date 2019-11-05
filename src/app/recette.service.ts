import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap, catchError } from 'rxjs/operators';
import { LOCAL_BASE_URL } from './server';

@Injectable({
  providedIn: 'root'
})
export class RecetteService {

  constructor(private http: HttpClient) { }
  getRecette(): Observable<any[]> {
    return this.http.get<any[]>(`${LOCAL_BASE_URL}/api/recettes`)
      .pipe(
        tap(
          data => console.log(data),
          err => console.log(err.message)
        ),
        map(data => data['hydra:member'])
      );
  }

  getRecetteById(id): Observable<any> {
    return this.http.get<any>(`${LOCAL_BASE_URL}/api/recettes/` + id)
    .pipe(
      map(data => data)
    );
  }

  
  getRegionById(id): Observable<any> {
    return this.http.get<any>(`${LOCAL_BASE_URL}/api/regions/` + id)
    .pipe(
      map (data => data)
    );
  }

}
