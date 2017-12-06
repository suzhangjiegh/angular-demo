import { Component,OnInit } from '@angular/core';
import {Hero} from "./bean/hero";
import { HeroService } from "./service/hero.service"


@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
	// providers数组告诉 Angular，当它创建新的AppComponent组件时，也要创建一个HeroService的新实例
	providers: [HeroService]
})
export class AppComponent implements OnInit{

	private title : String;

	private heroes : Hero[];

	private selectedHero: Hero;

	constructor(private heroService: HeroService) {

	}

	ngOnInit(): void {
		this.title='app';
		this.getHeroes();
	}


	/*getHeroes(): void {
		let that =this;
		this.heroService.getHeroesSlowly().then(function (heros) {
			console.log("getHeroes");
			that.heroes=heros
		});
	}*/

	async getHeroes() {
		this.heroes = await this.heroService.getHeroes();
		console.log("this.heroes",this.heroes);
	}

	onSelect(hero: Hero): void {

		this.selectedHero = hero;
	}


}


