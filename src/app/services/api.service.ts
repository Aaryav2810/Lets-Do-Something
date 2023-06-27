import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private readonly httpClient: HttpClient) { }

  /**
   * Calls to the API. Base URL has a random parameter to avoid cache.
   */
  public getActivityFromApi() {
    return this.httpClient.get(environment.baseUrl + '?' + new Date().getTime() * Math.random());
  }
}
