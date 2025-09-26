import { Component } from '@angular/core';
import { SliderComponent } from "../shared/slider/slider.component";

@Component({
  selector: 'app-mutual-funds',
  standalone: true,
  imports: [SliderComponent],
  templateUrl: './mutual-funds.component.html',
  styleUrl: './mutual-funds.component.scss'
})
export class MutualFundsComponent {

}
