import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InventoryItemListComponent } from './inventory-item-list/inventory-item-list.component';
import { NewInventoryItemComponent } from './new-inventory-item/new-inventory-item.component';

const routes: Routes = [
  {
    path: "inventoryItem-list",
    component: InventoryItemListComponent
  },
  {
    path:"register-inventoryItem",
    component:NewInventoryItemComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
