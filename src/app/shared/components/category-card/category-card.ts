import { Component, input } from '@angular/core';
import {
  LucideDynamicIcon,
  LucideIcon
} from '@lucide/angular';

@Component({
  selector: 'app-category-card',
  imports: [LucideDynamicIcon],
  templateUrl: './category-card.html',
  styleUrl: './category-card.scss'
})
export class CategoryCard {
  icon = input.required<LucideIcon>();
  title = input.required<string>();
  professionals = input.required<number>();
}