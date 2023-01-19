import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit{

  data:any[] = [];

  constructor(private dataService:DataService){}

  ngOnInit(): void {
      this.dataService.getPhoto().subscribe(((photo:any[''])=>{
        this.data = photo;
      }));
  }
}
