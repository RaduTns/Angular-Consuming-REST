
import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpParams, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { InventoryItemService } from '../models/inventory-item.service';
import { AuthService } from '../_services/auth.service';
@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  

  constructor(private authService: AuthService, private inventoryItemSerivce:InventoryItemService){
    
  }
  
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(this.addAuthToken(request));
  }

  addAuthToken(request: HttpRequest<any>) {
    //const token = this.authService.retrieveToken()

    return request.clone({
        setHeaders: {
          Authorization: `Bearer ${this.authService.retrieveToken()}`
        }
    })
  }
}