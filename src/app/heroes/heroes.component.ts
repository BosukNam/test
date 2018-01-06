import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero';
import {HEROES} from '../mock-heroes';
import {HeroService} from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  selectedHero: Hero;
  heroes: Hero[];
  // = {
  //   id: 1,
  //   name: 'Windstorm'
  // };

  constructor(public heroService: HeroService) {
    // this.hero = new Hero(2);
    // this.hero = new Hero(1, 'Ironman');
    // this.hero.id = 1;
    // this.hero.name = 'Windstorm';
  }

  ngOnInit() {
    // constructor에서 public 빼버리면 this 사용 불가
    // this.heroes = this.heroService.getHeroes();

    // promise
    // this.heroService.getHeroes().then(data => this.heroes = data);

    // observal
    this.heroService.getHeroes().subscribe(data => this.heroes = data);
  }


  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

}
