import { Component } from '@angular/core';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent {
  categories: Category[] = [];
  currentCategory: Category;
  //ProductComponent ProductService'yi kullanabilir.
  constructor(private categoryService: CategoryService) {}
  ngOnInit(): void {
    // İlk yüklenme zamanında yapılması gereken işlemleri burada tanımlayabilirsiniz.
    this.getProducts();
  }
  getProducts() {
    this.categoryService.getProducts().subscribe((response) => {
      this.categories = response.data;
    });
  }
  setCurrentCategory(category: Category) {
    this.currentCategory = category;
  }
  getCurrentCategoryClass(category: Category) {
    if (category == this.currentCategory) {
      return 'list-group-item active';
    } else {
      return 'list-group-item';
    }
  }

  getAllCategoryClass(){
    if(!this.currentCategory){
      return 'list-group-item active';
    }else{
      return 'list-group-item';
    }
  }
}
