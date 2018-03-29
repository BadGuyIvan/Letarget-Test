import { Component, OnInit, ElementRef, Renderer, HostListener } from '@angular/core';

@Component({
  selector: 'app-advantages',
  templateUrl: './advantages.component.html',
  styleUrls: ['./advantages.component.scss']
})
export class AdvantagesComponent implements OnInit {

  advantages = [
    'Лабораторна діагностика',
    'Комфортні номери готельного типу',
    'Басейн та сауна на мінеральній воді',
    'Комфортні номери готельного типу',
    'Фізіотерапевтичні процедури',
    'Лікувальні ванни',
    'Функціональна та лабораторна діагностика',
    'Галокліматична камера',
    'Лікувальний масаж'
  ]

   constructor() { }

  ngOnInit() {
  }

}
