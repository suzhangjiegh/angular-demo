//import { Component , Input} from '@angular/core';
import {Hero} from "./bean/hero";

import 'rxjs/add/operator/switchMap';

import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';

import { HeroService } from './service/hero.service';


@Component({
	selector:'hero-detail',
	templateUrl: './hero-detail.component.html',
})
export class HeroDetailComponent implements OnInit{

	constructor(
		private heroService: HeroService,
		private route: ActivatedRoute,
		private location: Location
	) {}


	/*	注意switchMap运算符如何将可观察的路由参数中的 id 映射到一个新的Observable， 即HeroService.getHero()方法的结果。

		如果用户在 getHero 请求执行的过程中再次导航这个组件，switchMap 再次调用HeroService.getHero()之前， 会取消之前的请求。

		英雄的id是数字，而路由参数的值总是字符串。 所以我们需要通过 JavaScript 的 (+) 操作符把路由参数的值转成数字。
	*/
	ngOnInit(): void {
		//noinspection TypeScriptUnresolvedFunction
		this.route.paramMap
			.switchMap((params: ParamMap) => this.heroService.getHero(+params.get('id')))
			.subscribe(hero => this.hero = hero);
	}

	goBack(): void {
		this.location.back();
	}

	@Input()hero: Hero;
}
