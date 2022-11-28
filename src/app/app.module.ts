import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes,RouterModule } from "@angular/router";
import { YouTubePlayerModule } from '@angular/youtube-player';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { AsideComponent } from './components/aside/aside.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { QuienesSomosComponent } from './components/quienes-somos/quienes-somos.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { TestimoniosComponent } from './components/testimonios/testimonios.component';
import { ContactoComponent } from './components/contacto/contacto.component';


const routes: Routes=[
  {path:'Inicio', component:InicioComponent},
  {path:'Quienes somos',component:QuienesSomosComponent},
  {path:'Servicios',component:ServiciosComponent},
  {path:'Testimonios',component:TestimoniosComponent},
  {path:'Contactanos',component:ContactoComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    AsideComponent,
    InicioComponent,
    QuienesSomosComponent,
    ServiciosComponent,
    TestimoniosComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    YouTubePlayerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
