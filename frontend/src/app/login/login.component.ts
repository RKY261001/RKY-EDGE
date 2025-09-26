import { Component } from '@angular/core';
// import { ApiService } from '../services/api.service';
// import { Router } from '@angular/router';
import { SliderComponent } from "../shared/slider/slider.component";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [SliderComponent],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  // username = '';
  // password = '';
  // message = '';

  // constructor(private api: ApiService, private router: Router) {}

  // onLogin() {
  //   const userData = { username: this.username, password: this.password };

  //   this.api.login(userData).subscribe({
  //     next: (res) => {
  //       if (res.success) {
  //         alert('Login successful!');
  //         this.router.navigate(['/dashboard']);
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
