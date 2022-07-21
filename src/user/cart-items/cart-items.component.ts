import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/services/api.service';

@Component({
  selector: 'app-cart-items',
  templateUrl: './cart-items.component.html',
  styleUrls: ['./cart-items.component.scss']
})
export class CartItemsComponent implements OnInit {
  cartItems:any;
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getCartitems().subscribe(data => {
      this.cartItems = data;
      console.log(this.cartItems);
    })
  }

}
