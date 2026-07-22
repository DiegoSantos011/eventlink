import { Component } from '@angular/core';
import { CategoryCard } from '../../../../shared/components/category-card/category-card';
import { Header } from '../../../../shared/components/header/header';
import { SearchBar } from '../../../../shared/components/search-bar/search-bar';
import {
  LucideCamera,
  LucideClapperboard,
  LucideCookingPot,
  LucideDisc3,
  LucideMartini,
  LucidePartyPopper
} from '@lucide/angular';
import { ProfessionalCard } from '../../../../shared/components/professional-card/professional-card';

@Component({
  selector: 'app-home',
  imports: [Header, SearchBar, CategoryCard, ProfessionalCard],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
 categories = [
  {
    icon: LucideDisc3,
    title: 'DJs',
    professionals: 128
  },
  {
    icon: LucideCamera,
    title: 'Fotógrafos',
    professionals: 96
  },
  {
    icon: LucideClapperboard,
    title: 'Videomakers',
    professionals: 74
  },
  {
    icon: LucideCookingPot,
    title: 'Buffet',
    professionals: 83
  },
  {
    icon: LucideMartini,
    title: 'Bartenders',
    professionals: 51
  },
  {
    icon: LucidePartyPopper,
    title: 'Decoração',
    professionals: 67
  }
];

featuredProfessionals = [
  {
    image: 'assets/images/profissional-dj.jpg',
    name: 'Alok',
    profession: 'DJ para eventos',
    location: 'São Paulo - SP',
    rating: 4.9,
    reviews: 127,
    startingPrice: 850
  },
  {
    image: 'assets/images/profissional-fotografa.jpg',
    name: 'Mariana Costa',
    profession: 'Fotógrafa',
    location: 'Campinas - SP',
    rating: 4.8,
    reviews: 94,
    startingPrice: 1200
  },
  {
    image: 'assets/images/profissional-bartender.jfif',
    name: 'Rafael Almeida',
    profession: 'Bartender',
    location: 'São Paulo - SP',
    rating: 4.9,
    reviews: 81,
    startingPrice: 650
  }
];
}
