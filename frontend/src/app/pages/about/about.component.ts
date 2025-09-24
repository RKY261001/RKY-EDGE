import { Component } from '@angular/core';
import { SliderComponent } from "../../shared/slider/slider.component";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [SliderComponent],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']   
})
export class AboutComponent {}
