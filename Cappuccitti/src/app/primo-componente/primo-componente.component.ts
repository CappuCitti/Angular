import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-primo-componente',
  templateUrl: './primo-componente.component.html',
  styleUrls: ['./primo-componente.component.css']
})
export class PrimoComponenteComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  name: string = 'secondo';
}
