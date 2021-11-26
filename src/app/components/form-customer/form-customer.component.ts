import { Component, ViewChild,ElementRef } from '@angular/core';
import { FormControl, FormGroupName, FormGroup } from "@angular/forms";
import { CustomersService } from '../../services/customers.service';
import { element } from 'protractor';

@Component({
  selector: 'app-form-customer',
  templateUrl: './form-customer.component.html',
  styleUrls: ['./form-customer.component.css']
})
export class FormCustomerComponent {

  @ViewChild('someInput') alert!: ElementRef;

  customerForm = new FormGroup({
    customerId: new FormControl(''),
    firstName: new FormControl(''),
    surName: new FormControl(''),
    custAge: new FormControl(''),
  });

  newCustomer: Customer;

  constructor(private _customerService:CustomersService) { }

  onResetform(){
    this.customerForm.reset();
  }

  onSaveForm(){
    this.newCustomer = this.customerForm.value;
    this._customerService.save(this.newCustomer).subscribe((rs: any)=>{
      this.onResetform();
      this.showAlert();
      
    });
  }
  showAlert(){
    this.alert.nativeElement.style.display = 'block';
    setTimeout(()=>{this.alert.nativeElement.style.display = 'none';},3000);
  }
}

export interface Customer {
  firstName   : string;
  surName     : string;
  customerId  : string;
  custAge     : number;
}

