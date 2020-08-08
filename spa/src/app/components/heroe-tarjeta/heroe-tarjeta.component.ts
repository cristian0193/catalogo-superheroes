import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Heroes } from 'src/app/servicios/heroes.service';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html'
})
export class HeroeTarjetaComponent  {

 @Input() heroe: any = {};
 @Input() index: number;

  constructor(private router: Router) {}

  verHeroe(){
    this.router.navigate( ['/heroe', this.index] );
  }

}
