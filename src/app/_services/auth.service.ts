import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost:8080/realms/KeycloakIntegrationTomcat/protocol/openid-connect/token';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  retrieveToken(body: any): Observable<any> {
    return this.http.post(AUTH_API, body);
  }

}