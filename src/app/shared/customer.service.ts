import { Injectable } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { AngularFireDatabase, AngularFireList } from "angularfire2/database";

@Injectable({
  providedIn: "root"
})
export class CustomerService {
  constructor(private firebase: AngularFireDatabase) {}

  customerList: AngularFireList<any>;

  form = new FormGroup({
    $key: new FormControl(null),
    name: new FormControl("", Validators.required),
    mobile: new FormControl("", [
      Validators.required,
      Validators.minLength(10)
    ]),
    email: new FormControl("", [Validators.required, Validators.email])
  });

  getCustomers() {
    this.customerList = this.firebase.list("customers");
    return this.customerList.snapshotChanges();
  }

  insertList(customer) {
    this.customerList.push({
      name: customer.name,
      mobile: customer.mobile,
      email: customer.email
    });
  }

  populateForm(customer) {
    this.form.setValue(customer);
  }

  updateList = customer => {
    this.customerList.update(customer.$key, {
      name: customer.name,
      mobile: customer.mobile,
      email: customer.email
    });
  };

  removeList = (key: string) => {
    this.customerList.remove(key);
  };
}
