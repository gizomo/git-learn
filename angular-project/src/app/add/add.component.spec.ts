import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { AddComponent } from './add.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
 
describe('AddComponent', () => {

  let comp: AddComponent;
  let fixture: ComponentFixture<AddComponent>;


  beforeEach(waitForAsync(() => { 
    TestBed.configureTestingModule({
      declarations: [
        AddComponent
      ],
      imports: [
        HttpClientTestingModule,
        ReactiveFormsModule
      ],
      providers: [
        FormBuilder,
        Validators
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddComponent);
    comp = fixture.componentInstance;
    fixture.detectChanges();
  });

  function updateForm(name, description, img, price) {
    comp.addProductForm.controls['name'].setValue(name);
    comp.addProductForm.controls['description'].setValue(description);
    comp.addProductForm.controls['img'].setValue(img);
    comp.addProductForm.controls['price'].setValue(price);
  }

  it('AddComponent should be created', () => {
    expect(comp).toBeTruthy();
  });

  it('Input elements should be rendered', () => {
    const compiled = fixture.debugElement.nativeElement;
    const nameInput = compiled.querySelector('input[formControlName="name"]');
    const descriptionInput = compiled.querySelector('input[formControlName="description"]');
    const imgInput = compiled.querySelector('input[formControlName="img"]');
    const priceInput = compiled.querySelector('input[formControlName="price"]');

    expect(nameInput).toBeTruthy();
    expect(descriptionInput).toBeTruthy();
    expect(imgInput).toBeTruthy();
    expect(priceInput).toBeTruthy();
  });
 
  it('Form validity check', () => {
    const form = comp.addProductForm;
    expect(form.valid).toBeFalsy();

    updateForm('Honnor 10', 'New mobile phone', '', '25000');
    expect(form.valid).toBeTruthy();
  });

  it('Inputs validity check', () => {
    const nameInput = comp.addProductForm.controls.name;
    const descriptionInput = comp.addProductForm.controls.description;
    const imgInput = comp.addProductForm.controls.img;
    const priceInput = comp.addProductForm.controls.price;
    
    expect(nameInput.valid).toBeFalsy();
    expect(priceInput.valid).toBeFalsy();
    expect(descriptionInput.valid).toBeTruthy();
    expect(imgInput.valid).toBeTruthy();

    updateForm('Honnor 10', '', '', '25000');
    expect(nameInput.valid).toBeTruthy();
    expect(priceInput.valid).toBeTruthy();

    //expect(comp.addProductForm.hasError('requied', ['name'])).toBe(true);
  });

  it('Test input errors', () => {
    const nameInput = comp.addProductForm.controls.name;
    const priceInput = comp.addProductForm.controls.price;

    expect(nameInput.errors.required).toBeTruthy();
    expect(priceInput.errors.required).toBeTruthy();

    updateForm('Honnor 10', '', '', 'None numeric');
    expect(priceInput.errors.pattern).toBeTruthy();
  });
});