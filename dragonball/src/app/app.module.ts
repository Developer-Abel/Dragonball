import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//rutas

import { APP_ROUTING } from './app.routes';

// importar desde cero
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { DragonballService } from './servicios/dragonball.service';
import { HomeComponent } from './components/home/home.component';
import { GuerrerosComponent } from './components/guerreros/guerreros.component';
import { GuerreroComponent } from './components/guerrero/guerrero.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    GuerrerosComponent,
    GuerreroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    APP_ROUTING

  ],
  providers: [
    DragonballService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
