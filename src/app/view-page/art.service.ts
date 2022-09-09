import { HttpClient } from '@angular/common/http';
import { getPlatform, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArtService {

  constructor(private http: HttpClient) { }
    getArt(){
      return this.http.get('http://localhost:3015/art')

  }
}

