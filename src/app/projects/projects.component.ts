import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  companies: any[] = [];
  expandedProjects: Set<any> = new Set();
  expandedCompanies: Set<any> = new Set();

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('/assets/projects.json').subscribe((data: any) => {
      this.companies = data;
      // Expand all companies by default
      this.companies.forEach(company => this.expandedCompanies.add(company));
    });
  }

  toggleExpanded(project: any): void {
    if (this.expandedProjects.has(project)) {
      this.expandedProjects.delete(project);
    } else {
      this.expandedProjects.add(project);
    }
  }

  isExpanded(project: any): boolean {
    return this.expandedProjects.has(project);
  }

  toggleCompanyExpanded(company: any): void {
    if (this.expandedCompanies.has(company)) {
      this.expandedCompanies.delete(company);
    } else {
      this.expandedCompanies.add(company);
    }
  }

  isCompanyExpanded(company: any): boolean {
    return this.expandedCompanies.has(company);
  }
}
