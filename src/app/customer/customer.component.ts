import { Component, OnInit } from "@angular/core";
import { CustomerService } from "../shared/customer.service";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-customer",
  templateUrl: "./customer.component.html",
  styleUrls: ["./customer.component.css"]
})
export class CustomerComponent implements OnInit {
  constructor(private customerService: CustomerService) {}
  submitted = false;
  showSuccessMsg = false;
  showUpdateMsg = false;
  formControls = this.customerService.form.controls;

  ngOnInit() {}

  onSubmit() {
    this.submitted = true;
    if (this.customerService.form.valid) {
      if (this.customerService.form.get("$key").value == null) {
        this.customerService.insertList(this.customerService.form.value);
        this.showSuccessMsg = true;
        setTimeout(() => this.showSuccessMsg=false, 3000);
      } else {
        this.customerService.updateList(this.customerService.form.value);
        this.showUpdateMsg = true;
        setTimeout(() => this.showUpdateMsg=false, 3000);
      }
      this.submitted = false;
      this.customerService.form.reset();
    }
  }
}
