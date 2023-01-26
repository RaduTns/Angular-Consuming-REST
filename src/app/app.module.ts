import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { InventoryItemListComponent } from './inventory-item-list/inventory-item-list.component';
import { InventoryItemService } from './models/inventory-item.service';
import { NewInventoryItemComponent } from './new-inventory-item/new-inventory-item.component';
import { FormsModule } from '@angular/forms';
import { TokenInterceptor } from './_helpers/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    InventoryItemListComponent,
    NewInventoryItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    InventoryItemService,{ provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
