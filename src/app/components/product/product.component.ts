import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  //ActivatedRoute : built-in bir angular service'dir. url'de gelen category/1 gibi değerleri okuyacağız.
  constructor(private productService:ProductService, private activatedRoute:ActivatedRoute) {}
  ngOnInit(): void {
    // İlk yüklenme zamanında yapılması gereken işlemleri burada tanımlayabilirsiniz.
    // this.getProducts();
    this.activatedRoute.params.subscribe(params=>{
      if(params["categoryId"]) {
        this.getProductsByCategory(params["categoryId"])
      }else{
        this.getProducts()
      }
    })
  }
  getProducts() {
   this.productService.getProducts().subscribe(response=>{
    this.products = response.data;
    this.dataLoaded = true;
   });
  }
  getProductsByCategory(categoryId:number) {
    this.productService.getProductsByCategory(categoryId).subscribe(response=>{
     this.products = response.data;
     this.dataLoaded = true;
    });
   }
  
}
