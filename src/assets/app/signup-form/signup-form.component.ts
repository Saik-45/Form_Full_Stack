import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {
  form: FormGroup;
  showSuccessPopup: boolean = false;

  constructor(private formBuilder: FormBuilder, private http: HttpClient) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      username: new FormControl('', Validators.required)
    });
  }

  onSubmit() {
    if (this.form.valid) {
      const user = { username: this.form.value.username };
      this.http.post<any>('http://localhost:1234/users/save', user)
        .subscribe(
          response => {
            this.showSuccessPopup = true;
            setTimeout(() => {
              this.showSuccessPopup = false;
              this.form.reset();
            }, 3000); // Hide the popup after 3 seconds and reset the form
          },
          error => {
            console.error('Error saving user:', error);
            this.form.setErrors({ serverError: true });
          }
        );
    } else {
      this.form.markAllAsTouched();
    }
  }
}