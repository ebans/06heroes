import { Component, Input, OnInit } from '@angular/core';
import { Heroe } from '../../interfaces/hero.interface';

@Component({
  selector: 'heroes-hero-card',
  templateUrl: './card.component.html',
  styles: [
  ]
})
export class CardComponent implements OnInit {

@Input()
public hero!:Heroe;


ngOnInit(): void {
 if (!this.hero) throw new Error('Heroe property is required');
}
}
