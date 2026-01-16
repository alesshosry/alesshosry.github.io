import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  companies: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('/assets/projects.json').subscribe((data: any) => {
      this.companies = data;
    });
  }
}
