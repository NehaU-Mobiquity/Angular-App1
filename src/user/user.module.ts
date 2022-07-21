import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CartItemsComponent } from './cart-items/cart-items.component';
import { SharedModuleModule } from 'src/shared-module/shared-module.module';
import { ApiService } from 'src/services/api.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductListComponent } from './product-list/product-list.component';



@NgModule({
  declarations: [
    DashboardComponent,
    CartItemsComponent,
    ProductListComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModuleModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ApiService]
})
export class UserModule { }
