import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-teaching',
  templateUrl: './teaching.component.html',
  styleUrls: ['./teaching.component.css']
})
export class TeachingComponent implements OnInit {
  content: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('/assets/teaching.json').subscribe((data) => {
      this.content = data;
    });
  }
}
