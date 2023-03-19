import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pokemon } from 'src/models/pokemon.model';
import { PokemonService } from 'src/services/pokemon.service';

@Component({
  selector: 'app-search-pokemon',
  templateUrl: './search-pokemon.component.html',
  styleUrls: ['./search-pokemon.component.scss']
})
export class SearchPokemonComponent implements OnInit {
  notFound: boolean = false;
  pokemon!: Pokemon;

  constructor(
    private pokemonService: PokemonService
  ) { }

  ngOnInit(): void {
  }

  search(e: any): void {
    var q = e.target.value;

    this.pokemonService.get(q).subscribe(data => this.pokemon = data);

    if (this.pokemon) {
      this.notFound = false;
    } else {
      this.notFound = true;
    }
  }
}
