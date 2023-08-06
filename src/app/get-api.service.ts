import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class GetApiService {

  constructor(private http:HttpClient) { }

  apiCall()
  {
    return this.http.get('https://f897bee3-5a98-4309-a217-fe3e7fd3d4a4.mock.pstmn.io/api/v1/dashboard');
  }
}
