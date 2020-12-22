import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppHttpServiceService {

  private url: string;
  
  constructor(private http: HttpClient) { }

  build(url) {
    this.url = 'http://127.0.0.1:8000/api/' + url;    

    return this;
  }

  create(data) {
    return this.http.post(this.url, data);
  }

  list() {
    return this.http.get(this.url);
  }

  createDemand(data) {
    return this.http.post(this.url, data);
  }
}
