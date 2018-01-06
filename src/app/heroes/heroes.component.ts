import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero';
import {HEROES} from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  selectedHero: Hero;
  heroes = HEROES;
  // = {
  //   id: 1,
  //   name: 'Windstorm'
  // };

  constructor() {
    // this.hero = new Hero(2);
    // this.hero = new Hero(1, 'Ironman');
    // this.hero.id = 1;
    // this.hero.name = 'Windstorm';
  }

  ngOnInit() {}


  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

}
