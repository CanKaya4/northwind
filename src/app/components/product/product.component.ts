import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  products: Product[] = [];
  dataLoaded = false;
  //ProductComponent ProductService'yi kullanabilir.
  constructor(private productService:ProductService) {}
  ngOnInit(): void {
    // İlk yüklenme zamanında yapılması gereken işlemleri burada tanımlayabilirsiniz.
    this.getProducts();
  }
  getProducts() {
   this.productService.getProducts().subscribe(response=>{
    this.products = response.data;
    this.dataLoaded = true;
   });
  }
}
