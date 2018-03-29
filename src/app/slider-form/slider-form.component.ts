import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider-form',
  templateUrl: './slider-form.component.html',
  styleUrls: ['./slider-form.component.scss']
})
export class SliderFormComponent implements OnInit {
  form = [
    'Ім\'я',
    'Телефон',
    'Дата заїзду',
    'Дата виїзду',
    'Тип номеру',
    'Надіслати',
  ]
  constructor() { }

  ngOnInit() {
  }

}
