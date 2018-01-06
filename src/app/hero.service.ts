import { Injectable } from '@angular/core';
import {HEROES} from './mock-heroes';
import {Hero} from './hero';
import {of} from 'rxjs/observable/of';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class HeroService {

  constructor() { }

  /*getHeroes(): Promise<Hero[]> {
    return Promise.resolve(HEROES);
  }*/

  getHeroes(): Observable<Hero[]> {
    return of(HEROES);
  }
}
