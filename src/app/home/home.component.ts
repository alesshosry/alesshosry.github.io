import { Component, OnInit } from '@angular/core';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  faQuoteLeft = faQuoteLeft;
  content: any = null;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('assets/home.json').subscribe(data => this.content = data);
  }
}
