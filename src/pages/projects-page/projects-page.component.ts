import { Component } from '@angular/core';
import { FooterComponent } from '../../components/footer/footer.component';
import { HeaderComponent } from '../../components/header/header.component';
import { TopMenuComponent } from '../../components/header/top-menu/top-menu.component';
import { NavbarComponent } from '../../components/header/navbar/navbar.component';
import { PROJECTS } from '../../services/data/projects.data';
import { Project } from '../../services/interfaces/project';
import { ProjectContainerComponent } from '../../components/project-container/project-container.component';

@Component({
  selector: 'projects-page',
  standalone: true,
  imports: [FooterComponent, HeaderComponent, TopMenuComponent, NavbarComponent, ProjectContainerComponent],
  templateUrl: './projects-page.component.html',
  styleUrl: './projects-page.component.css'
})
export class ProjectsPageComponent {
  projects: Project[] = PROJECTS;
}
