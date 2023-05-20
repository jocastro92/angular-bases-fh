/**
 *
 * en el video 36 se explica que este background de ts
 * esta relacionado 1 a 1 con los archivos de html y css que se encuenntran en
 * la carpeta de app
 * esta relacion la hacemos ene l decorador @component ya que le decimos
 * que archivos estara afectando este codigo
 * recordemos que un elemento de angular esta compuesto por 4 archivos
 * el html, css, ts y spec o de pruebas
 * todos estos archivos se encuentran relacionado.
 * gracias a estos lso archivos se encuentran bindeados y todo cambio que aplicamos en el archivo ts sera visible en el html
 * para este ejemplo en el html estamos imprimiendo la propiedad title
 * y para ellos tenemos que hacerlo con public
 *
 *
 * =========================================================================

 *
 *
 *
*/

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title: string = 'Mi Primer Curso de Angular';

}
