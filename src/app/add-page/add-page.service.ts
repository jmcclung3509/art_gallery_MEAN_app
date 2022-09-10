import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AddPageService {

  constructor(private http: HttpClient) { }

  addPage(payload: any){
    const options = new HttpHeaders({
      "Content-Type": "application/json",
      "Accept": "application/json",
    });
    return this.http.post('http://localhost:3015/art', payload, {
      headers: options,
  });
}
}
