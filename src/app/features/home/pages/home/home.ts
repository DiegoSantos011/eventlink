import { Component } from '@angular/core';
import { Header } from '../../../../shared/components/header/header';
import { SearchBar } from '../../../../shared/components/search-bar/search-bar';

@Component({
  selector: 'app-home',
  imports: [Header, SearchBar],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {}