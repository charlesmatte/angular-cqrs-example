import { Component, input } from '@angular/core';

type CardData = { title: string; body: string };

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  data = input<CardData>({
    title: 'Lorem ipsum',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent blandit, quam sed sollicitudin malesuada, augue orci dignissim elit, fringilla aliquam.',
  });
}
