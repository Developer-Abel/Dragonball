import { Component, OnInit } from '@angular/core';
import { DragonballService } from '../../../servicios/dragonball.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  constructor( private _dragonballService: DragonballService) { }

  ngOnInit() {
  }

}
