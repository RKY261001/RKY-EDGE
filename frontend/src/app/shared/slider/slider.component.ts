import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  standalone: true,
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements AfterViewInit {
  private index = 0;
  private slides!: HTMLElement;
  private dots!: NodeListOf<Element>;
  private totalSlides!: number;
  

  ngAfterViewInit(): void {
    this.slides = document.querySelector('.slides') as HTMLElement;
    this.dots = document.querySelectorAll('.dot');
    this.totalSlides = this.dots.length;

    document.querySelector('.prev')?.addEventListener('click', () => this.showSlide(this.index - 1));
    document.querySelector('.next')?.addEventListener('click', () => this.showSlide(this.index + 1));
    this.dots.forEach((dot, i) => dot.addEventListener('click', () => this.showSlide(i)));

    // Auto Slide
    setInterval(() => this.showSlide(this.index + 1), 5000);
  }

  private showSlide(i: number): void {
    this.index = (i + this.totalSlides) % this.totalSlides;
    this.slides.style.transform = `translateX(${-this.index * 100}%)`;

    this.dots.forEach(dot => dot.classList.remove('active'));
    this.dots[this.index].classList.add('active');
  }
}
