// registration-form.component.ts

import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RegistrationService } from '../registration.service'; // Adjust path as necessary

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent {
  user = {
    username: ''
  };

  constructor(private registrationService: RegistrationService, private snackBar: MatSnackBar) {}

  onSubmit() {
    if (this.user.username) {
      this.registrationService.registerUser(this.user).subscribe({
        next: (response) => {
          this.snackBar.open('Submitted Successfully', 'Close', { duration: 2000 });
          this.resetForm();
        },
        error: () => {
          this.snackBar.open('Failed to submit', 'Close', { duration: 2000 });
        }
      });
    }
  }

  resetForm() {
    this.user.username = '';
  }
}
