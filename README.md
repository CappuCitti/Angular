# Angular
*Angular* è un framework open source per lo sviluppo di applicazioni web, sviluppato da Google.

## Come inizializzare un nuovo progetto.
**Prerequisiti**:
- *Angular CLI* (`npm i -g @angular/cli`)

```shell
ng new <project-name>
cd <project-name>
ng serve
```

## Comandi (CLI)
* `ng new <project-name>` - Per creare un nuovo progetto
* `ng serve` - Compila ed avvia l'applicazione.
* `ng generate component <component-name>` (`ng g c <component-name>`) - Crea un nuovo componente nel progetto

## Struttura del progetto
```
progetto
├── ... (file di configurazione dell'applicazione)
└── src (file del progetto)
```

## Come dichiarare ed istanziare variabili in un componente:
```ts
export class myComponent implements OnInit {
  name: string; // <-- dichiara la proprietà 'name'

  constructor() { 
    this.name = 'Felipe'; // istanzia 'name' nel costruttore
  }

  ngOnInit() {
  }
}
```