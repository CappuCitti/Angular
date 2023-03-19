# Cosa è il *Routing*
Il routing definisce le regole per il mapping tra gli URL e i componenti dell'applicazione. Quando l'utente naviga nell'applicazione cliccando sui link o usando la barra degli indirizzi del browser, il routing di Angular si occupa di caricare il componente corretto sulla pagina.

# Come funziona su Angular?
Il sistema di routing di Angular ci consente di risolvere alcuni problemi e creare un'esperienza più user-friendly per gli utenti. Definendo delle rotte per i diversi componenti e associandole a URL specifici, possiamo modificare l'URL man mano che l'utente naviga attraverso la nostra app.

Ad esempio, quando l'utente clicca su un link per passare ad un altro componente, il router di Angular può aggiornare l'URL per riflettere la nuova posizione all'interno dell'applicazione senza ricaricare la pagina. Ciò significa che l'utente può aggiornare la pagina o condividere l'URL con altri e comunque essere indirizzato alla posizione corretta all'interno dell'app.

Inoltre, il sistema di routing di Angular ci consente di utilizzare i parametri di rotta per passare i dati tra i componenti e creare pagine dinamiche. Questo rende facile creare una vasta gamma di esperienze utente e costruire applicazioni complesse basate sui dati.

# Come creare una applicazione con il *Routing*
Quando utilizziamo il comando `ng` per creare una nuova applicazione questo ci chiede se vogliamo abilitare i routing, clicchiamo **Y** e premiamo **INVIO**.
```console
$ ng new pokemon
? Would you like to add Angular routing? (y/N) y
```

### Cosa crea Angular?
All'interno della cartella [app](./pokemon/src/app/) verrà creato in aggiunta il file [app-routing.module.ts](./pokemon/src/app/app-routing.module.ts) dove a suo interno si potranno configurare le *routes*, come qui sotto nell'esempio.
```ts
const routes: Routes = [
  {path: '', component: HomeComponent},                 // Primo componente che viene caricato quando viene caricato il sito ("/")
  {path: 'search', component: SearchComponent},         // "/search"
  {path: 'search/:id', component: DataComponent},       // "/search/123" o "/search/456"
];
```
A questo punto ci resta solo creare il nostro sito ed implementare delle API esterne per dare la possibilita' all'utente di interagire con esse.

### Come utilizzo le *routes* con le ancore?
Per utilizzare il tag `<a>` con le *route* di Angular è necessario sostituire il parametro `href=""` con `routerLink=""`, come qui sotto nell'esempio:
```html
<p>Cicca <a routerLink="/search">qui</a> per accere alla ricerca</p>
<p>Cicca <a [routerLink]="['/pokemon', '25']">qui</a> per accedere a pikachu</p>
```

### Come reindirizzo l'utente da Angular?
Per cambiare a *route* dell'utente da angular è necessario importare la classe [Router](https://angular.io/api/router/Router), istanziarlo e utilizzare la funzione `.navigate()`.
```ts
// Importiamo la classe
import { Router } from '@angular/router';

// ...

export class LoginComponent implements OnInit {
  // ...

  constructor(
    // Inizializziamo la classe
    private router: Router,
  ) { }

  ngOnInit(): void {
    // Se l'utente non è autorizzato esso viene riportato alla home
    if (!authorized) this.router.navigate(['/']);
  }
}
```

### Come vedere le *routes* nella pagina
In Angular, `<router-outlet>` è una direttiva che viene utilizzata per visualizzare i componenti associati alle rotte definite nell'applicazione. Quando l'utente naviga verso una determinata rotta dell'applicazione. La direttiva funge da segnaposto per il componente e Angular lo inserisce dinamicamente nell'outlet in base alla rotta corrente.<br>
**In sostanza, `<router-outlet>` consente di creare un'applicazione a singola pagina che può visualizzare diversi componenti in base alla rotta corrente, fornendo un'esperienza utente fluida e dinamica.**<br>
Questo tag viene solllitamnete inserito nel file HTML [app.component.html](./pokemon/src/app/app.component.html).
```html
<router-outlet></router-outlet>
```

### Come ottenere l'ID della *route*
`paramMap` è una proprietà dell'oggetto `ActivatedRoute`. Questa proprietà rappresenta un'osservabile che emette un nuovo valore ogni volta che i parametri dell'URL corrente cambiano.

Il valore emesso dall'osservabile è un oggetto di tipo ParamMap che rappresenta i parametri dell'URL sotto forma di mappa chiave-valore. La mappa contiene tutti i parametri presenti nell'URL, indipendentemente dal fatto che siano obbligatori o opzionali.

```ts
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

// ...

export class DataComponent implements OnInit {
  id: string = "";

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get('id')?.toString();

      if (!this.id) this.router.navigate(['/home']);
    });
  }
}
```

# Interagire con le API
Per questo progetto verranno utilizzate le API di [PokeAPI](https://pokeapi.co/) le quali forniscono dati sempre aggiornati riguardanti i pokemon e tutto quello che i circonda.

### Cosa è una API?
API è l'acronimo di "*Application Programming Interface*", ovvero un insieme di regole, protocolli e strumenti che consentono a diverse applicazioni software di comunicare tra di loro.

In pratica, un'API definisce come un'applicazione può interagire con un'altra, ad esempio per richiedere o fornire dati e funzionalità. In questo modo, le applicazioni possono scambiarsi informazioni e lavorare insieme in modo coordinato e automatizzato.

### Creare un servizio
Per iniziare si crea un servizio, il quale richiameremo ogni vota che dobbiamo effettuare una ricerca. Al suo interno conterrà tutte le funzioni che servono per ottenere dati specifici. Ecco un esempio:
```ts
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Pokemon } from 'src/models/pokemon.model';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private baseURL: string = 'https://pokeapi.co/api/v2';

  constructor(
    private http: HttpClient
  ) { }

  public pokemon(query: pokemon): Observable<Pokemon> {
    return this.http.get<Pokemon>(`${baseURL}/pokemon/${pokemon}`, {});
  }
}
```
N.B.: Quando utilizzi `@angular/common/http` è sempre necessario importarlo in [app.module.ts](./pokemon/src/app/app.module.ts).

### Utilizzare un servizio
Una volta creato un servizio possiamo utilizzarlo in qualsiasi parte del nostro codice semplicemente importandolo e richiamandolo.
```ts
import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/models/Pokemon.model';
import { PokemonService } from 'src/services/Pokemon.service';

// ...

export class SearchPokemon implements OnInit {
  pokemon!: Pokemon;
  constructor(
    public pokemonService: PokemonService
  ) { }

  ngOnInit(): void {
    this.pokemonService.pokemon("pikachu").subscribe(data => this.pokemon = data);
  }
}
```
