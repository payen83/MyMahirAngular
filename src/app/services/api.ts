import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Data } from './data';

@Injectable({
  providedIn: 'root'
})
export class Api {
  // public baseURL: string = 'http://localhost:3000/api';
  public baseURL: string = 'https://myexpressoct2025-production-15b2.up.railway.app/api';

  constructor(
    public httpClient: HttpClient,
    public dataService: Data
  ){}

  httpGet(path: string){
    let fullURL: string = this.baseURL + path;
    return new Promise((resolve, reject) => {
      this.httpClient.get(fullURL).subscribe({
        next: (response: any) => {resolve(response)},
        error: (error: any) => {reject(error)}
      })
    });
  }

  httpPost(path: string, payload: any){
    let fullURL: string = this.baseURL + path;
    console.log('URL=>',fullURL);
    // let token: string = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTAsImVtYWlsIjoiYWRtaW5AZ21haWwuY29tIiwiaWF0IjoxNzYxODEzODgyLCJleHAiOjE3NjE5MDAyODJ9.HaWZvhBQ5H8d--tSVhbBcqdlDuZew8Nv1jlAHd9tKQ0';
    let token: string = this.dataService.getLocalStorage('token');
    let headers: any = null;
    if(token){
      headers = { headers: new HttpHeaders (
          {Authorization: `Bearer ${token}`}
        ).set('Content-Type', 'application/json')
      } 
    } else {
      headers = { headers: new HttpHeaders()
        .set('Content-Type', 'application/json')
      }; 
    }

    return new Promise((resolve, reject)=>{
      this.httpClient.post(fullURL, payload, headers)
      .subscribe({
        next: (response: any) => {resolve(response)},
        error: (error: any) => {reject(error)}
      })
    });
  }
}
