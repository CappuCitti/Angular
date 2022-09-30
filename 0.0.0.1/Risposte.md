# Domande

### 0.0.0.1 - [LAB]
> 1. **Cos’è la Angular CLI**
> 2. **Cos’è gitpod?**
> 3. **Come posso vedere l’elenco dei repository remoti?**
> 4. **Qual è il comando per creare una nuova applicazione angular**

1. E' una console che permette di interagire velocemente con i workspace di angular
2. E' un ambiente di sviluppo simile a gitdev, basato su VSC
3. `git remote -v`
4. `ng new <project-name>`


### 00.1 [TEO]
> 1. **Qual è il comando per installare la angular cli?**
> 2. **Cosa contiene la pagina index.html?**
> 3. **Cos’è l’app-root?**
> 4. **Come si avvia un progetto angular?**

1. `npm i -g @angular/cli`
2. Contiene la strutture dell'applicazine con al suo interno i componenti necessari.
3. E' un componente di default, il quale necessario per costruire la base della nostra applicazione.
4. `ng serve`

> 1. **Come si crea un nuovo componente?**
> 2. **A cosa serve il codice import?**
> 3. **A cosa serve i decoratore @Component?**
>    - A cosa serve specificare il templateUrl?
>    - Lo styleUrl?
>    - Il selector?
> 4. **Come si aggiunge un nuovo componente all’app component?**
> 5. **Scrivi sul quaderno uno schema che contenga il codice di un componente  e di tutti i file a cui fa riferimento**
> 6. **A cosa serve il simbolo {{ }} nel template html**
> 7. **Da cosa è composta un’applicazione Angular?**
> 8. **Descrivi le funzionalità riassunte nella seguente immagine (descrivi ogni rettangolo)**
> 9.  **Qual è la convenzione per la nomenclatura dei seguenti file che costituiscono un componente.**
>     - nome del componente
>     - nome del template html
>     - nome del template css

1. `ng generate component <component-name>`
2. Importare le dipendenze.
3. Server per dichiarare i metadata del componente
   - Serve per dichiarare cosa deve essere copiato ogni volta che si importa un componente nel file HTML
   - Importa i file CSS necessari al componente
   - A quale tag corrisponde il componente
4. Va inserito il tag del componente nel file HTML
5. ```ts
    @Component({
        selector: 'app-nav',
        templateUrl: './nav.component.html',
        styleUrls: ['./nav.component.css']
    })
    ```
6. Serve per richiamare una variabile nel foglio HTML
7. Una applicazione Angular e' composta da componenti *modelabbili* i quali richiamati da tag all'intrno dei fogli HTML.
8. Colore rettangolo | Funzione
    --- | ---
    <img src="https://api.alexflipnote.dev/color/image/7199c2" alt="image" width="60" height="25"/> | Componente
    <img src="https://api.alexflipnote.dev/color/image/3de8a4" alt="image" width="60" height="25"/> | HTML del componente
    <img src="https://api.alexflipnote.dev/color/image/ea9f47" alt="image" width="60" height="25"/> | CSS del componente
    <img src="https://api.alexflipnote.dev/color/image/97d6e7" alt="image" width="60" height="25"/> | Indica che nel template e' possibile incorporare varibili
    <img src="https://api.alexflipnote.dev/color/image/3aa3f0" alt="image" width="60" height="25"/> | Indica che e' possibile trasformate la variabile passata tramite le parentesi graffe (in questo caso si invoca la funzione `String.prototype.toUpperCase()`)
    
9.  - *nav.component.ts*
    - *nav.component.html*
    - *nav.component.css*

### 01.1 [TEO]
> 1. **Come si dichiara una proprietà di una classe (variabile visibile a tutta la classe) in Angular?**
> 2. **Come si dichiara un costruttore?**
> 3. **Cos’è un costruttore?**
> 4. **Secondo te, quando viene creata l’istanza di una classe Angular?**
> 5. **Come si aggiunge una proprietà (o variabile) al template HTML?**

1. `var-name: var-type;`, in seguito istanziata nel costruttore per essere richiamata come proprieta' della classe.
2. `constructor() {}`
3. E' una funzione che definisce le variabili per l'instanza corrente, esso viene chiamato ogni volta che la classe viene richiesta.
4. Ogni volta che il tag e' presente in una pagina richiesta.
5. Utilizzando le doppie parentesi graffe con al loro il nome della variabile (*{{ }}*)

### 02.1 [TEO]
> 1. **Come si dichiara un vettore in una classe Angular?**
> 2. **Come lo puoi riempire?**
> 3. **Dato il seguente codice `<li *ngFor="let name of names">Hello {{ name }}<li>`?**
>     1. **Cos'è il tag `<li>`?**
>     2. **A cosa serve il simbolo `*`**
>     3. **Cos'è un elemento DOM?**
>     4. **Cosa fa la stringa `"let name of names"`**
>         1. **Cos'è `names`**
>         2. **Cosa fa `let name`**
>     5. **Cosa visualizza la sintassi `{{name}}`**
> 4. **Riscrivi il ciclo sopra supponendo di avere un vettore che si chiama cars e usando una variabile di ciclo che si chiama c**

1. ```ts
    varName: string[]; // Dichiarazione del vettore
    ```
2. Un vettore in TypeScript puo' essere popolto con qualsiasi tipo di variale e tipo di variabile
3. 👇
      1. Il tag `<li>` indica l'apertura di un elenco puntato
      2. Indica a cosa e' attribuita la direttiva `ngFor`
      3. Un elemento
      4. Rappresenta l'istruzione javascript pre creare un ciclo `forof`
         1. `names` rappresenta l'array di riferimento
         2. `let name` Dichiara una variabile ad ogni ciclo, essa attribuisce il valore del corrente stato del ciclo
      5. Visualizza il valore della variabile del ciclo `for`
4. ```html
    <li *ngFor="let c of cars">Car: {{ c }}<li>
    ```

> 1. **Rispetto al componente figlio (user-item)**
>       1. **A cosa serve il decoratore @Input?**
>       2. **Come si importa?**
>       3. **Come si associa a una variabile?**
> 2. **Rispetto al componente padre (user-list)**
>       1. **Come si passa un valore a un componente filgio?**
> 3. **Riscrivi il seguente codice rispettando questi vincoli**
>       1. **Il componente figlio si chiama gionny.**
>       2. **La variabile di input del componente figlio si chiama pupa**
>       3. **Il vettore si chiama bravo**
>       4. **La variabile di ciclo si chiama bu**

1. 👇
   1. Serve per ricevere un valore dal template principale
   2. Si importa dal modulo `@angular/core`
   3. scrivendo di seguito il nome della variabile ed sil suo tipo `@Input() vanName: varType;`
2. 👇
   1. Si aggiunge come attributo al componente la variabile di riferimento (`<app-my-componenet [myVar]="myVar"></app-my-componenet>`)
3. ```html
    <ul>
        <li *ngFor="let bu of bravo">
            <app-gionny [pupa]="bu"></app-gionny>
        </li>
    </ul>
    ```