import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private REST_API_SERVER = 'http://localhost:3000';
  constructor(private httpClient: HttpClient) { }

  public sendEmail() {
    return this.httpClient.post(this.REST_API_SERVER + '/sendEmail', null);

  }
}
