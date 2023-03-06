import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Products } from 'src/models/Data.model';
import { ProductData } from 'src/models/ProductData.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
    private baseURL: string = 'http://world.openfoodfacts.org';
    private pageSize: number = 30;
  
    constructor(
      private http: HttpClient
    ) { }
  
    /**
     * Restituisce tutti i prodotti coerenti con il termine di ricerca dato
     * @param {string} query - Termine di ricerca
     * @returns Observable<ArtistsData>
     */
    public products(query: string): Observable<Products> {
      return this.http.get<Products>(`${this.baseURL}/cgi/search.pl`, {
        params: {
          json: true,
          search_terms: query,
          page_size: this.pageSize
        }
      });
    }

    public product(id: string): Observable<ProductData> {
      return this.http.get<ProductData>(`${this.baseURL}/api/v0/product/${id}`, {});
    }
}
