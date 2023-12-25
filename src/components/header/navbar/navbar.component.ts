import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'navbar',
  standalone: true,
  imports: [FontAwesomeModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  faGithub = faGithub;
  faLinkedin = faLinkedin;
  faEnvelope = faEnvelope;

  GITHUB_URL = 'https://github.com/ryannjr';
  LINKEDIN_URL = 'https://linkedin.com/in/ryannjr';
  
}
