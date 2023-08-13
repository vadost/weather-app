import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class ApiService {

  private options: { headers?: HttpHeaders, withCredentials?: boolean } = {
    withCredentials: false
  };

  constructor(private http: HttpClient) {}

  get(url: string, params = {}, options = {}): Observable<any> {
    return this.http.get(url, {...this.options, ...options, params});
  }
}
