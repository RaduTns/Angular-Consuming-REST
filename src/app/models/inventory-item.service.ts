import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InventoryItem } from '../inventory-item';
import { HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class InventoryItemService {

  constructor(private http: HttpClient) { }

  baseUrl="http://localhost:8082/inventory/api/inventoryItem"

  retrieveToken(body:any){
    return this.http.post("http://localhost:8080/realms/KeycloakIntegrationTomcat/protocol/openid-connect/token", body);

  }

  createInventoryItem(inventoryItem: InventoryItem){
    return this.http.post(this.baseUrl, inventoryItem);

  }

  deleteInventoryItem(inventoryNumber:string){
    return this.http.delete(this.baseUrl+"/"+inventoryNumber);
  }

  updateInventoryItem(inventoryItem: InventoryItem){
    return this.http.put(this.baseUrl, inventoryItem);
  }

  getAllInventoryItems(){
    let token = this.retrieveToken
    let authToken = 'Bearer '+token
    let header = new HttpHeaders().set('', authToken)
    return this.http.get(this.baseUrl);
  }

  getInventoryItem(inventoryNumber: string){
    return this.http.get(this.baseUrl + "/");
  }
}
