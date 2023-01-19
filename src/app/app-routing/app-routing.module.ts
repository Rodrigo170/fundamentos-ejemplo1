import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//AGREGAR 
import {Routes, RouterModule} from '@angular/router';
import { HomeComponent } from '../pages/home/home.component';
import { AboutComponent } from '../pages/about/about.component';
import { ContactoComponent } from '../pages/contacto/contacto.component';
import { PostsComponent } from '../pages/posts/posts.component';
import { PhotoComponent } from '../pages/photo/photo.component';

//MAPA DE RUTAS
const routes: Routes = [
  {
    path: 'home', // NOMBRE DE LA RUTA
    component: HomeComponent // EL COMPONENTE CORESPONDIENTE
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'contacto',
    component: ContactoComponent
  },
  {
    path:'posts',
    component: PostsComponent
  },
  {
    path:'photo',
    component: PhotoComponent
  },
  { // RUTA POR DEFECTO
    path: '**',
    redirectTo: 'home'
  },
  
];

//SE DEBE DE PONER EN LA CLASE PRINCIPAL PARA QUE LO DETECTE (IR A app.module.ts)

@NgModule({
  declarations: [],
  imports: [
    // LA APLICACION TOMARA LA RAIZ LAS RUTAS
    RouterModule.forRoot(routes)
  ], // HACE NAVEGACIÓN A LAS PÁGINAS
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
