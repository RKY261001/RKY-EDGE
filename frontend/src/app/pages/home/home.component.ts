import { Component } from '@angular/core';
import { SliderComponent } from "../../shared/slider/slider.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SliderComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']   
})
export class HomeComponent {}
