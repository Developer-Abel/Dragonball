# Dragonball

## crear navbar
1.- Crear componente (navbar)
2.- En el app-component.html ingresar la etiqueta del nabvar
<app-navbar></app-navbar>
3.- crear el navbar (se puede obtener de bootstrap)

## crear home 

1.- crear componente home *g c components/home* (quitar los 2 archivos que no se utilizan)

2.- creamos el archivo *app.routes.ts* y dentro de el importamos el RouterModule e  importamos el componente del home

    ```
    import { RouterModule, Routes } from '@angular/router';
    import { HomeComponent } from './components/home/home.component';

    ```
3.- declaramos un arreglo AAP_ROUTES y dentro de este arreglo van a estar todos nuestros links de la pagina.
    ```
    const APP_ROUTES: Routes = [
        {path: 'home', component: HomeComponent},
        {path: '**', pathMatch: 'full', redirectTo: 'home'}
    ];
    ```
4.- y por ultimo lo exportamos para que lo puedan utilizar los demas archivos (module.ts)
    ```
    export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
    ```
5.- en el archivo *app.modules.ts* importamos el router que acabamos de crear
    ```
    import { APP_ROUTING } from './app.routes';
    ```
6.- despues importamos el componente del home
    ```
    import { HomeComponent } from './components/home/home.component';
    ```
7.- solo hace falta declarar el *APP_ROUTING en imports*
    ```
    imports: [
        BrowserModule,
        AppRoutingModule,
        APP_ROUTING

    ],
    ```
    y no olvidemos importar el AppModule
     ``` 
     export class AppModule { }
     ```
8.- por ultimo en el *app.component.html* llamamos al router
    ```
    <div class="container">
        <router-outlet></router-outlet>
    </div>
    ```
    *hasta este punto cuando se recarge la pagina se debe de ver en automatico la pagina del home*

## creando vista guerreros 
1.- vamos a crear la vista de guerreros, para eso creamos un componente guerreros *ng g c components/guerreros*

2.- lo importamos en el *routes* 
    ```
    import { GuerrerosComponent } from './components/guerreros/guerreros.component';
    ```
3.- lo declaramos dentro del arreglo *APP_ROUTES*
    ```
    {path: 'guerreros', component: GuerrerosComponent},
    ```
4.- por ultimo  en el navbar creamos el link, (notar como se declara el link)
    ```
    <li class="nav-item">
        <a class="nav-link" [routerLink]="['guerreros']">Guerreros</a>
    </li>
    ```         
    *Cada que necesitemos una vista este paso se tiene que repetir*  

## creando servicios

1.- creamos un nuevo servicio en la siguiente ruta *app/servicios/dragonball.service.ts*
2.- en este archivo importamos el servicio con el atajo ngimport
3.- cambiamos el nombre da la clase
    ```
    import { Injectable } from '@angular/core';

    @Injectable()

    export class DragonballService {
        constructor(){
            console.log(servicio dragonball listo); // para ver que funcione
        }
    }
    ```
4.- para poder utilizarlo lo importamos en *app.module*
    ```
    import { DragonballService } from './servicios/dragonball.service';
    ```
5.- lo declaramos en *providers*
    ```
    providers: [
        DragonballService
    ],
    ```
6.- importar el servicio en el archivo *navbar.components.ts*
    ```
    import { DragonballService } from '../../../servicios/dragonball.service';
    ```
7.- declararlo en el constructor (con esto ya se puede ver el mensaje de "servicio drangonball..")
    ```
    constructor( private _dragonballService: DragonballService) { }
    ```

## Utilizando servicio y creando array guerreros
1.- en el archivo *dragonball.service.ts* crear el array guerreros (simula una BD), este array debe de estar dentro de la clase *DragonballService*
   ```
    private guerreros: [] = [
            {
                nombre: 'goku',
                bio:'Son Goku es un saiyan natal del planeta Vegeta cuyo verdadero nombre es Kakarotto. Nació en el año 737 justo cuando su padre Barduck luchaba contra la tiranía de Freeza. En sus primeros días logró alcanzar las dos unidades de fuerza de combate, un nivel superior a la media humana',
                interpretado: 'Masako Nozawa',
                raza: 'saiyan',
                img: '/img/sayayin.jpg'
            }
    ];
   ```
2.- para utilizar este arreglo tenemos que crear un metodo y hacer referencia al arreglo
    ```
    getGuerreros(){
            return this.guerreros;
        }
    ```
    es buena practica hacer un *console.log* antes de mandar el array

3.- en el componente de guerreros (*guerreros.components.ts*) importamos en servicio
  ```
    import { DragonballService } from '../../servicios/dragonball.service';
  ```
4.- dentro de la clase *GuerrerosComponent* creamos una variable (queremos recibir un arreglo, pues tenemos que declararlo como arreglo) para recibir los guerreros y en el constructor debemos de inicializar la variable que importamos
    ```
    guerreros = [];

    constructor(private _dragonballService: DragonballService) {

    }
    ```
5.- por ultimo mediante la variable que incluimos en el constructor, llamamos al metodo que creamos en el servicio y esto tiene que ser dentro del metodo *ngOnInit*
    ```
    ngOnInit() {
        this.guerreros = this._dragonballService.getGuerreros();
        console.log(this.guerreros);
    }
    ```
6.- por ultimo en *guerreros.component.html* creamos un for y plasmamos cada uno de los guerreros
    ```
    *ngFor="let guerrero of guerreros"
    <img [src]="guerrero.img" class=" card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">{{guerrero.nombre}}</h5>
        <p class="card-text">{{guerrero.bio}}</p>
    </div>
    ```
## Creando guerrero invividual
# De los guerreros que ya se tiene al dar click en el boton, mandar a la vista individual mandando el id del guerrero (con esto ya solo hace falta cacharlo)

1.- crear el componente del guerrero individual *ng g c components/guerrero* (en singular)

2.- en el archivo *app.route.ts* importar el componente que creamos
 ```
    import { GuerreroComponent } from './components/guerrero/guerrero.component';
 ```
 y lo declaramos en el *APP_ROUTES*  "en el link enviamos el parametro *id*"
    ```
    {path: 'guerrero/:id', component: GuerreroComponent},
    ```
3.- en el archivo *guerreros.component.ts* importamos el route para que reconozca el id (de una manera diferente a la comun PRESTAR ATENCION)
    ```
    import { Router } from '@angular/router';
    ```
despues declaramos en el *constructor* el route
  ```
    private router: Router
  ```
4.- creamos una funcion para que lo utilicemos en el HTML (al pulsar el boton)
    ```
    verMas(idx: number){
        //console.log(idx);   ---> es importante hacer el console, para ver si llega el *id*
        this.router.navigate(['/guerrero', idx])
    }
    ```
    *prestar atencion en la ultima linea, porque es donde siempre falla*
5.- por ultimo en el archivo *guerreros.component.html* creamos el boton con la funcion que acabamos de crear
    ```
    <button (click)="verMas(i)" class="btn btn-block btn-primary">Ver mas</button>
    ```
    *hasta en estos momentos al dar click en el boton debe redireccionar a la nueva vista (guerrero.component.html) y en la url se debe de mostrar el ide que se esta mandando AHORA SOLO FALTA RECIBIRLO*

## Cachar los datos y plasmar el guerrero individual

1.- En el archivo *dragonball.service.ts* creamos una funcion para obtener solo un guerrero
    ```
    getguerrero(idx){
            return this.guerreros[idx];
        }
    ```
2.- llamamos esta funcion en *guerrero.component.ts* y para eso tenemos que importar el servicio y *el route*
    ```
    import { ActivatedRoute } from '@angular/router'; 
    import { DragonballService } from '../../servicios/dragonball.service'; 
    ```
3.- ahora tenemos que declararlo en *export class GuerreroComponent*
    ```
    constructor(private activateRoute: ActivatedRoute, private _dragonballService: DragonballService) {}
    ```
4.- antes del constructor pero dentro de la clase creamos una objeto para recivir la informacion del guerrero
    ```
    guerrero: any = {};
    ```
5.- Despues dentro del costructor viene un chorizote que es el siguiente
    ```
    this.activateRoute.params.subscribe(params => {
            this.guerrero = this._dragonballService.getguerrero(params['id']);
            console.log(this.guerrero);
        });
    ```
    lo que hace es que, en la variable local guerrero se iguala al metodo que creamos en el servicio, y para eso tiene que ocupar la variable *_dragonballService* ya que este sirve como vinculo para obtener la funcion *getguerrero*, si vemos el *console.log*  deberiamos de ver un arreglo de los datos del guerrero.

5.- solo queda obtener el valor del arreglo *(guerrero)* en el archivo *guerrero.component.html*
    ```
    <p>{{guerrero.nombre}}</p>
    ```
    *Hasta aqui, deberia de verse el nombre de el guerrero que se seleccione desde el boton*

