import { Component, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'project-container',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './project-container.component.html',
  styleUrl: './project-container.component.css'
})
export class ProjectContainerComponent {
  faGithub = faGithub;
  @Input() project_name: string = "";
  @Input() project_description: string = "";
  @Input() project_tech: string[] = [];
  @Input() project_link: string = "";
}
