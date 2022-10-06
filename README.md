# Angular
*Angular* è un framework open source per lo sviluppo di applicazioni web, sviluppato da Google.

## Come inizializzare un nuovo progetto.
**Requisiti**:
- *Angular CLI* (`npm i -g @angular/cli`)

```shell
ng new <project-name>
cd <project-name>
ng serve
```

## Comandi (angular CLI)
* `ng new <project-name>` - Per creare un nuovo progetto
* `ng serve` - Compila ed avvia l'applicazione.
* `ng generate component <component-name>` (`ng g c <component-name>`) - Crea un nuovo componente nel progetto

## Comandi (GIT)
* `git add *` - Aggiunta dei file al commit
* `git commit -m  "comment"` - Creazione del commit
* `git push origin main/branch` - Invio dei commit al progetto

## Struttura del progetto
```
progetto
├── ... (file di configurazione dell'applicazione)
└── src (file del progetto)
```

## Come dichiarare ed istanziare variabili in un componente:
```ts
import { ..., Input } from '@angular/core';

...

export class myComponent implements OnInit {
  name: string;
  users: string[];
  @Input() carName: string = "";

  constructor() { 
    this.name = 'Felipe';
    this.users = ['Bar', 'Foo'];
  }

  ngOnInit() {
  }
}
```

## Direttive strutturali
Le direttive strutturali sono direttive che modificano il layout DOM aggiungendo e rimuovendo elementi DOM. Angular fornisce una serie di direttive strutturali integrate (come `NgIf`, `NgForOf`, `NgSwitch` e altri) che sono comunemente utilizzate in tutti i progetti Angular.<br>
Quando vengono applicate le direttive strutturali, generalmente sono precedute da un asterisco **\*** come `*ngIf`. Questa convenzione è un'abbreviazione che Angular interpreta e converte in una forma più lunga. Angular trasforma l'asterisco davanti a una direttiva strutturale in un <ng-template> che circonda l'elemento host ei suoi discendenti.
```html
<ul>
  <li *ngFor="let user of users">Hi {{ user }}!</li>
</ul>
```

## Cosa e' [Bootstrap](https://getbootstrap.com/)
E' un oolkit frontend potente, estensibile e ricco di funzionalità. Creato con Sass, esso utilizza il sistema di griglia e i componenti predefiniti pre creare pagine responsive.
```shell
# installazione da Angular CLI
ng add @ng-bootstrap/ng-bootstrap
```
```html
<!-- CDN CSS -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
```