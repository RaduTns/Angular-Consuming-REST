import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { InventoryItemService } from '../models/inventory-item.service';

const AUTH_API = 'http://localhost:8080/realms/KeycloakIntegrationTomcat/protocol/openid-connect/token';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private inventoryItemService: InventoryItemService) { }

  retrieveToken() {
    return this.inventoryItemService.getTestToken()
  }

}