import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  hero: Hero;
  // = {
  //   id: 1,
  //   name: 'Windstorm'
  // };

  constructor() {
    this.hero = new Hero(2);
    this.hero = new Hero(1, 'Ironman');
    // this.hero.id = 1;
    // this.hero.name = 'Windstorm';
  }

  ngOnInit() {}

}
