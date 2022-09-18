import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  @Input() _cardData: any;

  constructor() {
  }

  ngOnInit(): void {
    console.log(this._cardData)
  }

}
