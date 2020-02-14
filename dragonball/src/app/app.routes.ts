import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { GuerrerosComponent } from './components/guerreros/guerreros.component';
import { GuerreroComponent } from './components/guerrero/guerrero.component';



const APP_ROUTES: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'guerreros', component: GuerrerosComponent},
    {path: 'guerrero/:id', component: GuerreroComponent},
    {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
