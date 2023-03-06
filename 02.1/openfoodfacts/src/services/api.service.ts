import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
    private baseURL: string = 'http://world.openfoodfacts.org/cgi';
    private pageSize: number = 30;
  
    constructor(
      private http: HttpClient
    ) { }
  
    /**
     * Restituisce tutti i prodotti coerenti con il termine di ricerca dato
     * @param {string} query - Termine di ricerca
     * @returns Observable<ArtistsData>
     */
    public products(query: string): Observable<any> {
      return this.http.get(`${this.baseURL}/search.pl`, {
        params: {
          json: true,
          search_terms: query,
          page_size: this.pageSize
        }
      });
    }
}
