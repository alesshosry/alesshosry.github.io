import { Component } from '@angular/core';

import { faTwitter, faGithub, faLinkedin, faFacebook, faResearchgate } from '@fortawesome/free-brands-svg-icons';

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

}
