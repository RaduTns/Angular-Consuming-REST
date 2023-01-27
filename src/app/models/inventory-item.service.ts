import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InventoryItem } from '../inventory-item';
import { HttpHeaders } from '@angular/common/http';
import { HttpParams } from '@angular/common/http'; 
import { single, take, map, firstValueFrom} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class InventoryItemService {

  constructor(private http: HttpClient) { }

  testToken =''

  baseUrl = "http://localhost:8082/inventory/api/inventoryItem"
  
  async retrieveToken(body: any) {
    await firstValueFrom( this.http.post("http://localhost:8080/realms/KeycloakIntegrationTomcat/protocol/openid-connect/token", body)).then((res:any)=>{
    console.log(res.access_token)  
    this.testToken = res.access_token
    // return res.access_token
    })
   
  }
  getTestToken(){
    return this.testToken
  }

  createInventoryItem(inventoryItem: InventoryItem) {
    return this.http.post(this.baseUrl, inventoryItem);
  }

  deleteInventoryItem(inventoryNumber: string) {
    return this.http.delete(this.baseUrl+'/'+inventoryNumber);
  }

  getAllInventoryItems() {

    return this.http.get(this.baseUrl);

  }

  getInventoryItem(inventoryNumber: string) {
    return this.http.get(this.baseUrl+'/'+inventoryNumber);
  }



}
