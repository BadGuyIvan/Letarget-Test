import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './app-navbar.component.html',
  styleUrls: ['./app-navbar.component.scss']
})
export class AppNavbarComponent implements OnInit {


  navbar = [
    'Головна',
    'Про нас',
    'Лікування',
    'Галерея',
    'Розваги',
    'Номери',
    'Контакти',
  ]

  constructor() { }

  ngOnInit() {
  }

}
