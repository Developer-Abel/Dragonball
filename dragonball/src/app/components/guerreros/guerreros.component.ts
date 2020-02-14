import { Component, OnInit } from '@angular/core';
import { DragonballService } from '../../servicios/dragonball.service';
import { Router } from '@angular/router'; //importar



@Component({
  selector: 'app-guerreros',
  templateUrl: './guerreros.component.html'
})
export class GuerrerosComponent implements OnInit {

  guerreros = [];

  constructor(private _dragonballService: DragonballService, private router: Router) { //declarar

   }

  ngOnInit() {
    this.guerreros = this._dragonballService.getGuerreros();
    // console.log(this.guerreros);
  }

  verMas(idx: number){
    //console.log(idx);
    this.router.navigate(['/guerrero', idx])// utilizar
  }

}
