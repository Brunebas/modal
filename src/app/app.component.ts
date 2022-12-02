import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  [x: string]: any;
  mostrar : boolean = false;
  title = 'modal';
  tags: string[];

  toggle(){
    this.mostrar = !this.mostrar;
  }
}
