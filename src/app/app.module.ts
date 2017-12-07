import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms'

import { AppComponent } from './app.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroesComponent } from './heros.component';
import { HeroService } from "./service/hero.service"
import {DashboardComponent} from "./dashboard.component";

import { AppRoutingModule }     from './router/index';


@NgModule({
	declarations: [
		AppComponent,
		HeroDetailComponent,
		HeroesComponent,
		DashboardComponent,
	],
	imports: [
		BrowserModule,
		FormsModule,
		AppRoutingModule
	],
	// providers数组告诉 Angular，当它创建新的AppComponent组件时，也要创建一个HeroService的新实例
	providers: [HeroService],
	bootstrap: [AppComponent]
})
export class AppModule {
}
