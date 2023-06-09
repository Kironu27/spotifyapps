import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProductsComponent } from './products/products.component';
import {SearchComponent } from './search/search.component';
import {TestComponent } from './test/test.component';

const routes: Routes = [
  { path: "home",component:HomeComponent },
{ path: "about",component:AboutComponent },
{ path: "products",component:ProductsComponent },
{ path: "search", component:SearchComponent},
{ path: "test", component: TestComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
