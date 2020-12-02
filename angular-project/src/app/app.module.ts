import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { AppComponent } from './app.component';
import { CatalogComponent } from './catalog/catalog.component';
import { ProductComponent } from './product/product.component';
import { AddComponent } from './add/add.component';
import { AuthGuard } from './auth.guard';
import { reducers } from './store/reducers';
import { effects } from './store/effects';

const routes: Routes = [
  { path: '', component: CatalogComponent },
  { path: 'products/add', component: AddComponent, canActivate: [AuthGuard] },
  { path: 'products/:productId', component: ProductComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    CatalogComponent,
    ProductComponent,
    AddComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    StoreModule.forRoot(reducers, { runtimeChecks: { strictStateImmutability: true, strictActionImmutability: true } }),
    EffectsModule.forRoot(effects)
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
