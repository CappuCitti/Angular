# Domande

### 15.1 - [TEO]
> 1. Cosa devi fare per usare il modulo HTTP?
> 2. Prendendo in considerazione il componente Foo descrivi a cosa servono i seguenti attributi
>     1. data
>     2. loading
>     3. o
> 3. Come si usa l’oggetto HttpClient? Descrivi
>     1. Come si importa
>     2. Come viene passato al componente tramite la dependency injection
> 4. Spiega la differenza tra queste due notazioni
>     1. ```ts
>         constructor(public http: HttpClient) {}
>         ```
>     2. ```ts
>         // other instance variables here
>         http: HttpClient;
>         constructor(http: HttpClient) {
>           this.http = http;
>         }
>         ```
> 5. Come si ottiene un oggetto observable che riceverà i dati da una get http?
> 6. Come si “sottoscrive” un metodo che gestisca i dati ricevuti dall’oggetto observable descritto nella domanda precedente?
> 7. Commenta ogni riga del metodo getData
>     ```ts
>     getData = (d : Object) =>
>       {
>         this.data = new Object(d);
>         this.loading = false;
>       }
>     ```
> 8. Descrivi il funzionamento delle seguenti righe HTML
>     ```html
>     <button type="button" (click)="makeRequest()">Make Request</button>
>     <div *ngIf="loading">loading...</div>
>     <pre>{{data | json}}</pre>
>     ```
> 9. Come si fa una post HTTP? Cosa si riceve come risposta?


1. Bisogno importare il modulo `@angular/common/http` per poter utilizzare le funzioni HTTP ed aggiungerlo negli `imports`.
2. 👇
   1. Raccogliere il contenuto della risposta HTTP
   2. Variabile che indica se la risposta e' in elaborazione
   3. Si mette in *ascolto* dei cambiamenti della risposta, e invia eventi per ogni cambiamento
3. 👇
   1. `import { HttpClient } from '@angular/common/http';`
   2. Tramite il costruttore (`constructor(public http: HttpClient) { }`)
4. Cambia quando viene istanziata la variabile
   1. Nel primo caso viene dichiarata ed istanziata quando viene richiesto il modulo
   2. nel secondo caso viene dichiarata prima del costruttore ed in seguito istanziata
5. Viene attaco all'oggetto osservabile la risposta...
6. ...in seguito associato al metodo `subscribe` per notificare un cambiamento
7. Una *arrow function* che attribuisce alla variabile data il contenuto dell'oggetto passatto come parametro, infine imposta il valore a falso della variabile `loading`
8. La prima riga crea un bottone che richiama la funzione per creare una richiesta HTTP, la seconda mostra la scritta *loading...* solo se la variabile in `foo.component.ts` e' vera, la terza riga mostra il risultato della richiesta HTTP
9. Per creare una richietsa POST bisogna utilizzare il la funzione `http.post`, in seguito si utilizza il metodo `subscribe` per passare la risposta ed assegnarla ad una variabile