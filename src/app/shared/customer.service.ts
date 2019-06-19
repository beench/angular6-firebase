import { Injectable } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Injectable({
  providedIn: "root"
})
export class CustomerService {
  constructor() {}
  form = new FormGroup({
    $key: new FormControl(null),
    name: new FormControl('', Validators.required),
    mobile: new FormControl('', [Validators.required, Validators.minLength(10)]),
    email: new FormControl('', [Validators.required, Validators.email])
  });
}
