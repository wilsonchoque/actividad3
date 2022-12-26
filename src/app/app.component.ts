import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Actividad 3';
  titulo='FRAMEWORK ANGULAR';

  
  cursos:string[]=[];
  addcurso(nombrec:string){
    this.cursos.push(nombrec)
  }


}
