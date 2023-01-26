import { Component, OnInit } from '@angular/core';
import { InventoryItem } from '../inventory-item'
import { InventoryItemService } from '../models/inventory-item.service';
import { HttpParams } from '@angular/common/http';
@Component({
  selector: 'app-new-inventory-item',
  templateUrl: './new-inventory-item.component.html',
  styleUrls: ['./new-inventory-item.component.css']
})
export class NewInventoryItemComponent implements OnInit {

  inventoryItem = new InventoryItem();
  constructor(private inventoryItemService: InventoryItemService) { }
  params = new HttpParams()
    .set("client_id", "inventory-client")
    .set("client_secret", "G5rTT2Pu8YDqjmc86cN64nY1x79V8EAX")
    .set("grant_type", "client_credentials")

  ngOnInit() {
    
  }

  registerInventoryItem() {
    this.inventoryItemService.createInventoryItem(this.inventoryItem).subscribe((response: any) => {
      console.log(response);
    });

  }
}
