import { Component } from '@angular/core';

import { faTwitter, faGithub, faLinkedin, faFacebook, faResearchgate, faStackOverflow } from '@fortawesome/free-brands-svg-icons';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent {
  faTwitter = faTwitter;
  faLinkedin = faLinkedin;
  faResearchgate = faResearchgate;
  faGithub = faGithub;
  faFacebook = faFacebook;
  faStackOverflow = faStackOverflow;
  faGraduationCap = faGraduationCap;

}
