import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiListService {
  private apiUrl = 'https://jsonplaceholder.typicode.com';
  constructor(public httpClient: HttpClient) {}

  // get , put , delete, post
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  getUserListService(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.apiUrl + '/' + 'posts');
  }
  // delete specific user in list
  userDelete(id: any): Observable<any[]> {
    return this.httpClient.delete<any[]>(this.apiUrl + '/' + 'posts/' + id);
  }

  addMember(body: any): Observable<any[]> {
    return this.httpClient.post<any[]>(
      this.apiUrl + '/posts/',
      JSON.stringify(body),
      this.httpOptions
    );
  }

  updateMember(id: any, body: any): Observable<any> {
    return this.httpClient.put<any[]>(
      this.apiUrl + '/posts/' + id,
      JSON.stringify(body),
      this.httpOptions
    );
  }
}
