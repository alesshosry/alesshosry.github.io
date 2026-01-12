import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  // grouped by company for clearer layout
  companies = [
    {
      name: 'Bankers Assurance SAL',
      projects: [
        {
          title: 'Websites',
          description: "Complaints, Medical Insurance, Motor insurance, Quotation",
          link: ''
        },
        {
          title: 'Mobile application webservices',
          description: "",
          link: ''
        }
      ]
    },
    {
      name: 'INRIA',
      projects: [
        {
          title: 'MoTion',
          description: "MoTion is a declarative object matching approach that I developed during my thesis. It is used by developers to match Pharo objects and ASTs for program analysis.",
          link: 'https://github.com/alesshosry/MoTion'
        },
        {
          title: 'Adonis',
          description: "Adonis helps detecting links between heterogeneous artifacts (different languages or projects). It's an ongoing research prototype.",
          link: 'https://github.com/alesshosry/Adonis'
        }
      ]
    },
    {
      name: 'Berger-Levrault',
      projects: [
        {
          title: 'Pharo-Tree-Sitter',
          description: "I contributed to this project at Berger-Levrault. It helps generating FAST metamodels using Tree-Sitter to cover more programming languages.",
          link: 'https://github.com/Evref-BL/Pharo-Tree-Sitter'
        },
        {
          title: 'FASTTypescript',
          description: "FASTTypescript generates TypeScript AST metamodels.",
          link: 'https://github.com/moosetechnology/FASTTypescript'
        },
        {
          title: 'Carrefour-TypeScript',
          description: "",
          link: ''
        },
        {
          title: 'FamixTypeScriptModelUpdater',
          description: "",
          link: ''
        }
      ]
    }
  ];
}
