/**
 * video 42 habal sobre one way data binding
 * este es un concepto de angular muy poderoso
 * este concpeto me dice que las propiedades definidas en mi clase estan relacionadas con la parte html
 * del componente que estoy creando
 *
 * two way datadinbing significa cuando cambiamos la propiedad en el html
 * este cambio tambien afectara el componente del lado del TS
 *
 * en agular nosotros debemos de trabajar y procurar trabajar solo con one way databinding
 * editar las propiedades en el archivo .ts y replicarlos en el html luego
 *
 * ===========================================================================
 * *video 44 directiva *ngif
 * todo: ngif remueve o crea una parte del DOM basado en la expresion showsection
 * en el html en donde vamos a ejecutar la accion agregamos lo siguiente
 * *ngIf="expresion de js" en este caso es true o false
 * cuando podemos un false este elemento se destruye t literalmente no existe
 * esto se hace en el dom scripting
 * tambie podemos agregar expresiones y validaciones que retornen true o false
 * *ngIf="name !== 'Spiderman'"
 *
 * las directivas sion parrte del ciclo dde decteccion de cambios en angular es decir que cuando nosotrs
 * agregamios el boton de limpiar a nuestro proyecto el detecta los cambios y los esta
 * actualizando en pantalla en todo momento y la directiva ngif se mantiene en todo eel ciclo
 *
 * las instrucciones que damos en js, index.html y css puros estan fuera del ciclo de dectcion de angular
 * para que nosotros miremos nuestros cambios debemos de aplicarlo en angular
 *
 * codigo qe no funciona en el ciclo de deccion de cambios
 *
 * *    document.querySelectorAll('h1').forEach( element=>{
   **element.innerHTML = `<h1>Hola JS puro fuera del ciclo de dectccion de cambios</h1>`
    **})
 * este codigo no funcionara para las propiedades que tengo en mi clase de angular
 * solo afectara el HTML y JS puros
 */


import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  public name: string = 'ironman';
  public age: number = 45;

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  getheroDescription(): string {
    return `${this.name} - ${this.age}`;
  }

  changeHero(name: string = 'Spiderman'): void {
    this.name = name;
  }

  changeAge(age: number = 25): void {
    this.age = age;
  }

  resetForm(): void {
    this.name = 'ironman';
    this.age = 45;

    // document.querySelectorAll('h1').forEach( element=>{
    //   element.innerHTML = `<h1>Hola JS puro fuera del ciclo de dectccion de cambios</h1>`
    // })
  }

}
