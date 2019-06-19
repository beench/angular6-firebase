import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../shared/customer.service'
import { NgForm } from '@angular/forms'

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  constructor(private customerService: CustomerService) { }
  submitted = false
  formControls = this.customerService.form.controls;

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    this.submitted = true
    if (this.customerService.form.valid) {

      this.submitted = false
    }
  }

}
