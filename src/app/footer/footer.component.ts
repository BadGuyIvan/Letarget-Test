import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }

  address = 'м. Косів, вул. Над Гуком, 15.'

  phones = [
    '+38 067 97 31 124',
    '+38 067 37 24 622',
    '+38 097 19 90 900',
    '+38 097 90 00 700',
  ]

  email = 'uakzori@gmail.com.'

  menu = [
    'Головна',
    'Про нас',
    'Лікування',
    'Галерея',
    'Розваги',
    'Номери',  
    'Контакти',
  ]

  ngOnInit() {
  }

}
