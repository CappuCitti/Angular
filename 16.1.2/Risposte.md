# 16.1.2 [VER - LAB]

> 1. Studia il funzionamento dell’applicazione
>    1. Nel codice trovi 3 strutture Dati (file model.ts) quali sono e a cosa servono?
>    2. Sapresti spiegare come vengono usate le notazioni  [value] e [(ngModel)] nel codice che genera la combo box?
>    3. Qual è la riga di codice che trova l’oggetto Album a partire dal titolo?
>    4. Come si aggiunge una canzone al vettore di canzoni?
> 2. Modifica il codice sorgente in modo che l’applicazione all’avvio scarichi la lista delle canzoni con una chiamata http e le mostri in un componente song-list (verde in Figura).
>    1. Nota che l’oggetto songList è già dichiarato nel file app.component.ts
>    2. La richiesta http va fatta a questo indirizzo: https://my-json-server.typicode.com/malizia-g/hotel/songlist
> 3. Aggiungi alla lista degli album qualche album a piacere
> 4. A fianco di ogni canzone visualizza un tasto “preferito”
>    1. Applica Bootstrap
>    2. Ogni volta che l’utente preme il tasto “preferito” colora di rosso la canzone selezionata (o viceversa) usando l’host binding
> 5. Ogni volta che l’utente seleziona un album nella Form di inserimento, i dettagli vengono aggiunti al componente dettagli-album  (arancione in Figura)

1. 👇
   1. `album.model.ts` contiene i tipi di dati di ogni album, `albumList.model.ts` gli album in formao *array di oggetti*, infine `song.model.ts` contiene i tipi di dati di ogni canzone
   2. `value` indica il valore selezionato da assegnare per ogni opzione, `(ngModel)` assume il valore dell'album selezionato
   3. ```ts
      this.selectedAlbum = AlbumList.find((album: Album) => album.title == this.selectedOption);
      ```
   4. ```ts
      this.songList.push(new Song(this.selectedAlbum, new Date(d.value), Number(l.value), t.value));
      ```
2. ✔
3. ✔