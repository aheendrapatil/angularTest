import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class CommonService {
//   private heroes: Hero[] = [];

  constructor(private http: HttpClient) { }

  getUsers():Observable<any> {
      return this.http.get<any>('https://jsonplaceholder.typicode.com/users');
  }

  getAlbum():Observable<any> {
      return this.http.get<any>('https://jsonplaceholder.typicode.com/albums');
  }
  getPhotos():Observable<any> {
      return this.http.get<any>('https://jsonplaceholder.typicode.com/photos');
  }
}