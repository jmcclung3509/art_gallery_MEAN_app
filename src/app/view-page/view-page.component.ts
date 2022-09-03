import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

HttpClient;
@Component({
  selector: 'app-view-page',
  templateUrl: './view-page.component.html',
  styleUrls: ['./view-page.component.css']
})
export class ViewPageComponent implements OnInit {
 artInfo!: any;
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get('http://localhost:3015/art').subscribe((res:any)=> {
      console.log(res)
      this.artInfo = res?.data
    })
  }

}
