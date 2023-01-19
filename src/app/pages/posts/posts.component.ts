import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit{

  //PROPIEDAS
  //GUARDARA LO QUE SE OBTENGA EN LA URL
  data:any[] = [];

  //LLAMA EL SERVICE
  constructor(private dataService:DataService) {}

  ngOnInit(): void {
    //METODO OBSERVABLE
    //recibe y actualiza
      this.dataService.getPost().subscribe(((posts:any[''])=> {
        this.data = posts;
      }));
      /*
      this.dataService.getPost().subscribe((posts:any[''])) => {
        this.data = posts
      };
       */ 
      
  }
}
