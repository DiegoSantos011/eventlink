import { Component, input } from '@angular/core';

@Component({
  selector: 'app-professional-card',
  imports: [],
  templateUrl: './professional-card.html',
  styleUrl: './professional-card.scss'
})
export class ProfessionalCard {
  image = input.required<string>();
  name = input.required<string>();
  profession = input.required<string>();
  location = input.required<string>();
  rating = input.required<number>();
  reviews = input.required<number>();
  startingPrice = input.required<number>();
}
