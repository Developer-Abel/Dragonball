import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; //impor
import { DragonballService } from '../../servicios/dragonball.service'; //impor



@Component({
  selector: 'app-guerrero',
  templateUrl: './guerrero.component.html'
})
export class GuerreroComponent { // quitar OnInot
    guerrero: any = {};
  constructor(private activateRoute: ActivatedRoute, private _dragonballService: DragonballService) {
    this.activateRoute.params.subscribe(params => {
        this.guerrero = this._dragonballService.getguerrero(params['id']);
        console.log(this.guerrero);
    });
   }

   


}
