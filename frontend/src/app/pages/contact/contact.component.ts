import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  model = { name: '', email: '', message: '' };
  status = '';

  submit() {
    console.log(this.model);
    this.status = '✅ Your message has been sent!';
  }
}
