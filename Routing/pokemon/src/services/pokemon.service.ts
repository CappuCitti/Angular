import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemon } from 'src/models/pokemon.model';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  baseUrl: string = 'https://pokeapi.co/api/v2'

  constructor(
    private http: HttpClient,
  ) { }

  public get(q: string): Observable<Pokemon> {
    return this.http.get<Pokemon>(`${this.baseUrl}/pokemon/${q}`, {});
  }
}
