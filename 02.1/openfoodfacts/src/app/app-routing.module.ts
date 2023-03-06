import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { SearchProductsComponent } from './search-products/search-products.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'producs', component: SearchProductsComponent},
  {path:'producs/:id', component: ProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
