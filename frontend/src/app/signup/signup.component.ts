import { Component } from '@angular/core';
// import { ApiService } from '../services/api.service';
// import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  // fullname = '';
  // email = '';
  // username = '';
  // password = '';
  // message = '';

  // constructor(private api: ApiService, private router: Router) {}

  // onSignup() {
  //   const userData = {
  //     fullname: this.fullname,
  //     email: this.email,
  //     username: this.username,
  //     password: this.password
  //   };

  //   this.api.signup(userData).subscribe({
  //     next: (res) => {
  //       if (res.success) {
  //         alert('Account created successfully!');
  //         this.router.navigate(['/login']);
  //       } else {
  //         this.message = res.message;
  //       }
  //     },
  //     error: () => {
  //       this.message = 'Something went wrong!';
  //     }
  //   });
  // }
}
