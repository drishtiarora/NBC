import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class StarWarsService {

  constructor(private http: HttpClient) { }

  getPeople() {
    return this.http.get<any>('/API/v1/star-wars');
  }

  searchString(input: String){
    this.http.post("http://localhost:4200/star-wars-post", input);
  }
}