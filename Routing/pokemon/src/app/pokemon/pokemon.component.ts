import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Pokemon } from 'src/models/pokemon.model';
import { PokemonService } from 'src/services/pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {
  baseUrl: string = 'https://pokeapi.co/api/v2'
  id: string | undefined = "";
  pokemon!: Pokemon;
  genders: string = "";

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private pokemonService: PokemonService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get('id')?.toString();

      if (!this.id) this.router.navigate(['/pokemon']);
      else {
        this.pokemonService.get(this.id).subscribe(data => {
          this.pokemon = data;
        });
      }
    });

  }

  getTypes(): Array<string> {
    return this.pokemon.types.map(t => t.type.name);
  }

  getMoves(): string {
    return this.pokemon.moves.map(m => m.move.name).join(", ");
  }
}
