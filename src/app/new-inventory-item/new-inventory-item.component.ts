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

  ngOnInit() {
    
  }

  registerInventoryItem() {
    this.inventoryItemService.createInventoryItem(this.inventoryItem).subscribe((response: any) => {
      console.log(response);
    });

  }
}
