import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  public nombre:string='Luis Carlos Escorcia Manga'
  public anio:string='© 2020 Copyright:'
}