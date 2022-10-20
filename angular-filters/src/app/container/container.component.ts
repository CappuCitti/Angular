import { Component, DEFAULT_CURRENCY_CODE, OnInit } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css'],
  providers: [{ provide: DEFAULT_CURRENCY_CODE, useValue: 'EUR' }] // change the locale currency
})
export class ContainerComponent implements OnInit {
  text: string = '';
  people: string[] = [];

  now: Date = new Date();
  toggle: Boolean = true;

  money: number = 0;

  constructor() {
    this.text = 'ThIs Is A sTrInG';
    this.people = ['Jho', 'Juan', 'Roberto', 'Denny', 'Angela'];

    this.money = 29.99;
  }

  get format() {
    return this.toggle ? 'shortDate' : 'fullDate';
  }
  
  toggleFormat() {
    this.toggle = !this.toggle;
  }

  ngOnInit(): void {
  }

}
