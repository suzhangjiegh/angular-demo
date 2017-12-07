import { Injectable } from '@angular/core'
import {HEROES} from './mock-heroes'
import {Hero} from "../bean/hero";


@Injectable()
export class HeroService{

	getHeroes(): Promise<Hero[]>{

		console.log('hero.service1 getHeroes',HEROES);
		return Promise.resolve(HEROES);
	}

	getHeroesSlowly(): Promise<Hero[]> {
		return new Promise(resolve => {
			// Simulate server latency with 2 second delay
			setTimeout(() => resolve(HEROES), 2000);
		});
	}

	getHero(id: number): Promise<Hero> {
		console.log('hero.service1 getHero',HEROES);
		return this.getHeroes()
			.then(heroes => heroes.find(hero => hero.id === id));
	}
}
