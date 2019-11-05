import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OpenFoodServiceService {

  constructor(private http: HttpClient) { }

  getFood(barcodeData): Observable<any> {
    return this.http.get<any>('https://fr.openfoodfacts.org/api/v0/produit/' + barcodeData + '.json')
      .pipe(
        map(data => data)
      );
  }
}
