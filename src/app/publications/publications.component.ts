import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.css']
})
export class PublicationsComponent implements OnInit {
  expandedPublications: Set<any> = new Set();
  publications: any[] = [];
  groupedPublications: { year: string; publications: any[] }[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('/assets/publications.json').subscribe((data: any) => {
      this.publications = data;
      this.groupByYear();
    });
  }

  groupByYear(): void {
    const grouped = new Map<string, any[]>();

    // Sort publications by year descending
    const sorted = [...this.publications].sort((a, b) => parseInt(b.year) - parseInt(a.year));

    // Group by year
    sorted.forEach(pub => {
      if (!grouped.has(pub.year)) {
        grouped.set(pub.year, []);
      }
      grouped.get(pub.year)!.push(pub);
    });

    // Convert to array format
    this.groupedPublications = Array.from(grouped, ([year, pubs]) => ({
      year,
      publications: pubs
    }));
  }

  toggleExpanded(pub: any): void {
    if (this.expandedPublications.has(pub)) {
      this.expandedPublications.delete(pub);
    } else {
      this.expandedPublications.add(pub);
    }
  }

  isExpanded(pub: any): boolean {
    return this.expandedPublications.has(pub);
  }

  getPublicationType(pub: any): string {
    return pub.type || 'conference';
  }

  getPublicationTypeLabel(pub: any): string {
    const type = pub.type || 'conference';
    const labels: { [key: string]: string } = {
      'conference': '📌 Conference',
      'workshop': '📝 Workshop',
      'journal': '📚 Journal'
    };
    return labels[type] || 'Publication';
  }
}