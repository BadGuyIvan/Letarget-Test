import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-choose-us',
  templateUrl: './choose-us.component.html',
  styleUrls: ['./choose-us.component.scss']
})
export class ChooseUsComponent implements OnInit {

  active_item: number;
  text: string;

  choose_us = [
    'Комфортні номери готельного типу',
    'Використовуємо фітотерапевтичні засоби',
    'Активний відпочинок на свіжому повітрі',
    'Лікування включає весь спектр процедур та медичний супровід'
  ]

  choose_text = [
    `
    Номери готельного типу:<br/>
    "Стандарт" – на двох осіб та на одну особу;<br/>
    "Напівлюкс" – двокімнатний, на двох осіб та на трьох осіб;<br/>
    "ЛЮКС" – трикімнатний, до двох осіб та до чотирьох осіб.<br/>
    Ціна номеру за добу включає: проживання; повний пансіон 
    (обід, вечеря, сніданок); бювет; користування сейфом у 
    адміністратора; автостоянка; консультація у лікаря; вимір-
    ювання АТ та температури; інгаляція з аромомаслами; 
    перлинні ванни; фіточаї, киснева пінка; електропроцедури; 
    парафіно-озокеритові аплікації.
    `,
    'Plant',
    'Mount',
    'Hot'
  ]

  changes_tabs(event) {
    this.active_item = event;
    this.text = this.choose_text[this.active_item];
  }
  constructor() {
    this.active_item = 0;
    this.text = this.choose_text[this.active_item];
   }

  ngOnInit() {
  }

}
