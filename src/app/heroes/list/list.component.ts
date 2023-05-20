/**
 * * notas viddeo 45
* directiva ngfor
* esta directiva no es mas que un ciclo for pero para el lado del template o html
 *
 * cuando dentro del html utilizamos las dobles llaves a esto se le conoce comointerpolacion
 * {{}}
 *
 * * el *ngfor lo que hace es crear un template vacio del html y lee interpola las propiedades o los valores que nosotros le pasemos de nuestro archivo .ts o clase
 *
 ===============================================================================================================
 directiva ngiif-else

antes de ver uestra directiva conoceremos el ng-temnplate
este componente que viene por defecto con angular es como un div que no existe
es decir a nivel de HTML NO CONSTRUYE NADA simplemente va a mostarr su contenido
al dejar un eelemento html dentro de un ng-templatee esto ni si quiera se va a construir porque esta esperando que yo le indicque cuando se va a contruir

codigo de directiva ngif-else
<div *ngIf="deletedHero; else nadaBorrado">
  <h3>Heroe Borrado <small class="text-danger">{{deletedHero}}</small></h3>
</div>

<ng-template #nadaBorrado>
  <h3>No ha borrado nada.</h3>
</ng-template>

en el eelse decimso que ira a buscar el identificador local llamado nadaBorrado
para crear un identificador local ponemos el simbolo de $# seguri del nombre
dentro de nuesto elemento html en este caso fue nuestro nng-template


 *
 */


import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  public nameHeroes: string[] = ['Spiderman', 'IronMan', 'Thor', 'Hulk', 'Capitan America'];
  public deletedHero?: string;

  removeLastHero(): void {

    this.deletedHero = this.nameHeroes.pop();
  }


}
