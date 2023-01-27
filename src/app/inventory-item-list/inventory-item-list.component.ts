import { Component, OnInit } from '@angular/core';
import { InventoryItem } from '../inventory-item';
import { InventoryItemService } from '../models/inventory-item.service';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { JwtHelperService, JwtModule } from '@auth0/angular-jwt';
@Component({
  selector: 'app-inventory-item-list',
  templateUrl: './inventory-item-list.component.html',
  styleUrls: ['./inventory-item-list.component.css']
})
export class InventoryItemListComponent implements OnInit {

  inventoryItems!: InventoryItem[];

  constructor(private inventoryItemService: InventoryItemService, private jwtHelper:JwtHelperService) { }


  params = new HttpParams()
    .set("client_id", "inventory-client")
    .set("client_secret", "G5rTT2Pu8YDqjmc86cN64nY1x79V8EAX")
    .set("grant_type", "client_credentials")

  async ngOnInit() {
    let token = this.inventoryItemService.getTestToken()
    if (token == '') {
      console.log("e null")
      await this.inventoryItemService.retrieveToken(this.params)
    }
    else {
      console.log("nu e null")
      if (this.jwtHelper.isTokenExpired(token)) {
        console.log("a expirat")
        await this.inventoryItemService.retrieveToken(this.params)
      }
    }
    this.inventoryItemService.getAllInventoryItems().subscribe((response: any) => {
      this.inventoryItems = response;
    });
  }

  deleteInventoryItem(inventoryNumber: string) {
    this.inventoryItemService.deleteInventoryItem(inventoryNumber).subscribe((response) => {
      console.log(response);
    });
  }
}
