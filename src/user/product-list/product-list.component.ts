import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/services/api.service';
interface productStructure {
  id: number;
  title: string;
  description: string;
  price: number;
  count: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  productsList: productStructure[] | null = null;
  constructor(private apiService: ApiService) {}
  ngOnInit(): void {
    this.apiService.getData().subscribe((data: any) => {
      this.productsList = data.products;
      console.log(this.productsList);
    });
  }

  addItem(item:productStructure) {
    if (item.count == 5) {
      return;
    }
    item.count++;
  }
  removeItem(item:productStructure){
    if (item.count == 0) {
      return;
    }
    item.count--;
  }

  addToCart(event:any){
    this.apiService.addItemstoCart(event)
  }
}
