import { Component } from '@angular/core';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-teaching',
  templateUrl: './teaching.component.html',
  styleUrls: ['./teaching.component.css']
})
export class TeachingComponent {
  faQuoteLeft = faQuoteLeft;
}
