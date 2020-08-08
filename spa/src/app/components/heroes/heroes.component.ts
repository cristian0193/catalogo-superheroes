import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroes } from '../../servicios/heroes.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {

  heroes: Heroes[] = [];

  constructor( private heroesServices: HeroesService,
               private router: Router ) { }

  ngOnInit() {
    this.heroes = this.heroesServices.getHeroes();
  }

  verHeroe(index: string){
    this.router.navigate(['/heroe', index]);
  }

}
