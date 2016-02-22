import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {HeroListComponent}     from './heroes/hero-list.component';
import {HeroDetailComponent}   from './heroes/hero-detail.component';

import {HeroService}           from './heroes/hero.service';
import {CrisisListComponent} from './crisis-list.component';
@Component({
  selector: 'my-app',
  template: `
    <h1 class="title">Component Router</h1>
    <nav>
      <a [routerLink]="['CrisisList']">Crisis Center</a>
      <a [routerLink]="['Heroes']">Heroes</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  providers: [HeroService],
  directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([

  { // Crisis Center child route
    path: '/crisis-center',
    name: 'CrisisList',
    component: CrisisListComponent,
    useAsDefault: true
  },

  { path: '/heroes', name: 'Heroes', component: HeroListComponent },
  { path: '/hero/:id', name: 'HeroDetail', component: HeroDetailComponent }
])
export class AppComponent { }
