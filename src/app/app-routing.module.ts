import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './components/product/product.component';
import { CategoryComponent } from './components/category/category.component';
import { ProductAddComponent } from './components/product-add/product-add.component';
//const : sabit demek. const ile yazılan arraylar değişmez. sadece constractor'da değiştirebilir.
//app-rout'da ne göstereyim dediğimiz yer burası
//patMatch:"full" : 
const routes: Routes = [
  //"" tırnaklar arası boş bıraktığım için bu benim anasayfam, anasayfamda productComponenti aç demiş oldum
  {path:"", pathMatch:"full" ,component:ProductComponent},
  // /product yazarsa yine productcomponentini aç
  {path:"products",component:ProductComponent},
  {path:"products/categories/:categoryId",component:ProductComponent},
  {path:"products/add",component:ProductAddComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
