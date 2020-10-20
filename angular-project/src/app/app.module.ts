import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CatalogComponent } from './catalog/catalog.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  { path: '', component: CatalogComponent },
  { path: 'products/:productId', component: ProductComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    CatalogComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
