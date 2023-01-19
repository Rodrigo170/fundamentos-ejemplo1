import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  //DECLARAR PROPIEDAS  
  nombre:string = 'Rodrigo';
  nota:number = 16;
  encendido:boolean = true;

  //ARREGLOS O LISTAS
  personas:string[] = ['Juan','Pedro','Maria','Luis'];


  constructor() {}
  ngOnInit(): void {
      
  }

  //MÉTODO QUE CAMBIA LAS PROPIEDAS
  cambiarValores(){
    this.nombre = 'Juan';
    this.nota = 500;
    this.encendido = false;
  }

}
