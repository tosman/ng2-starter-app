import {HEROES} from './mock-heroes';
import {Injectable} from 'angular2/core';
import {Hero} from './hero';

@Injectable()
export class HeroService {
  private heroes: Hero[];

  getHeroes() {
    if (!this.heroes) {
      this.heroes = HEROES;
    }

    return Promise.resolve(this.heroes);
  }
  getHero(id: number | string) {
    return this.getHeroes()
      .then(heroes => heroes.filter(h => h.id === +id)[0]);
  }
}
