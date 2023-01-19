import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

//SE INYECTA A UN COMPONENTE DAR DE ALTA PARA QUE SE PUEDA USAR
@Injectable({
  providedIn: 'root'
})
export class DataService {
  // GRABA EL OBJETO
  constructor(private http:HttpClient) { }

  //MÉTODO QUE OBTIENE LOS DATOS DE LA PETICIÓN WEB
  getPost(){
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }

  getPhoto(){
    return this.http.get('https://jsonplaceholder.typicode.com/photos');
  }
}
