import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiListService {
  private apiUrl = 'https://jsonplaceholder.typicode.com';
  constructor(public httpClient: HttpClient) {}

  // get , put , delete, post

  getUserListService(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.apiUrl + '/' + 'posts');
  }
  // delete specific user in list
  userDelete(id: any): Observable<any[]> {
    return this.httpClient.delete<any[]>(this.apiUrl + '/' + 'posts/' + id);
  }
}
