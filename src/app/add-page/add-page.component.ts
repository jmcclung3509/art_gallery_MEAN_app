import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

HttpClient;
@Component({
  selector: 'app-add-page',
  templateUrl: './add-page.component.html',
  styleUrls: ['./add-page.component.css']
})
export class AddPageComponent implements OnInit {

superInfo!:any

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    formValues
    this.http.post('http://localhost:3015/super', {formValues}).subscribe((res:any)=> {
      this.superInfo = res?.data
    })
  }

}
