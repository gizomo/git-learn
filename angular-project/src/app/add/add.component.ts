import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//import { HttpService } from "../http.service";
import { AddProduct } from '../store/actions';
import { AppState } from '../store/state/app';
import { Product } from '../product/product';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent {

  public addProductForm: FormGroup;

  public localUrl: string;

  constructor(private formBuilder: FormBuilder, private store: Store<AppState> ) { 
    this._createForm();
  }

  private _createForm() {
    this.addProductForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      description: '',
      img: '',
      price: ['', [Validators.required, Validators.pattern(/^[0-9]+(?!.)/)]]
    });
  }

  get _name() {
    return this.addProductForm.get('name');
  }

  get _price() {
    return this.addProductForm.get('price');
  }

  onSubmit(productData: Product) {
//    this.httpService.addProduct(productData);
    this.store.dispatch(new AddProduct(productData));
    this.addProductForm.reset();
    this.localUrl = null;
  }

  onSelectedFile(event: any) {
    if(event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (event: any) => {
        this.localUrl = event.target.result;
        this.addProductForm.patchValue({
          img: this.localUrl
        })
      }
    }
  }
}
