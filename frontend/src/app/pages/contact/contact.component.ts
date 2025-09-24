import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { SliderComponent } from "../../shared/slider/slider.component";


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, SliderComponent ],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  name = '';
  email = '';
  message = '';
  response: string | null = null;

  constructor(private apiService: ApiService) { }

  submitForm() {
    this.apiService.sendContact({
      name: this.name,
      email: this.email,
      message: this.message
    }).subscribe({
      next: res => {
        if (res.ok) {
          this.response = 'Message sent! ID: ' + res.id;
          // Clear the form
          this.name = '';
          this.email = '';
          this.message = '';
        } else {
          this.response = 'Error: ' + res.error;
        }
      },
      error: () => this.response = 'Error sending message'
    });
  }

}
