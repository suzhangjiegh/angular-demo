/**
 * Created by jie on 2017/12/6.
 *
 */
import { Component,OnInit } from '@angular/core';
import {HeroService} from "./service/hero.service";
import {Hero} from "./bean/hero";

@Component({
	selector: 'my-heroes',
	templateUrl:'./heros.component.html',
	styleUrls: ['./heros.component.css'],
})
export class HeroesComponent implements OnInit {
	ngOnInit(): void {
		this.getHeroes();
	}

	private heroes : Hero[];

	private selectedHero: Hero;

	constructor(private heroService: HeroService) {

	}

	// 官网方法
	/*getHeroes(): void {
	 let that =this;
	 this.heroService.getHeroesSlowly().then(heros=>this.heroes=heros)
	 }*/

	async getHeroes() {
		this.heroes = await this.heroService.getHeroes();
		console.log("this.heroes",this.heroes);
	}

	onSelect(hero: Hero): void {

		this.selectedHero = hero;
	}

}
