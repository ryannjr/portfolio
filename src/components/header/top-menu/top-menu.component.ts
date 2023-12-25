import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faAngular } from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'header-top-menu',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './top-menu.component.html',
  styleUrl: './top-menu.component.css'
})
export class TopMenuComponent {
  faAngular = faAngular;
}
