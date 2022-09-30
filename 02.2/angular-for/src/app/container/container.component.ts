import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {
  constructionMachinery: string[];
  constructor() {
    this.constructionMachinery = ['Escavatori', 'Terne', 'Pale', 'Minipale', 'Dumpers', 'Bulldozer', 'Motolivellatrici', 'Rulli compattatori', 'Luigi', 'Cricchetto',]
   }

  ngOnInit(): void {
  }

}
