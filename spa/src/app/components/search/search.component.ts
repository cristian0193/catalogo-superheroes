import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService, Heroes } from '../../servicios/heroes.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent {

  @Input() heroe: Heroes[] = [];
  @Input() index: number;

  filterHeroe: Heroes[] = [];
  termino: string;

  constructor(private heroesService: HeroesService,
              private activatedRoute: ActivatedRoute) {
   
    this.activatedRoute.params.subscribe( params => {
      this.termino = params['termino'];
      this.filterHeroe = this.heroesService.buscarHeroes( params['termino']);
    });
  }

}  
