
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {ArtService} from './art.service'

HttpClient;
@Component({
  selector: 'app-view-page',
  templateUrl: './view-page.component.html',
  styleUrls: ['./view-page.component.css']
})
export class ViewPageComponent implements OnInit {
 artInfo!: any;
 art!: any
  constructor( private artService: ArtService) {}

  ngOnInit(): void {
    this.artService.getArt().subscribe((res:any)=> {
      console.log(res)
      this.artInfo = res?.data
    })
  }

}
