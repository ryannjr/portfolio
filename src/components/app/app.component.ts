import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TopMenuComponent } from '../header/top-menu/top-menu.component';
import { HeaderComponent } from '../header/header.component';
import { NavbarComponent } from '../header/navbar/navbar.component';
import { HomePageComponent } from '../../pages/home-page/home-page.component';
import { FooterComponent } from '../footer/footer.component';
import { AboutPageComponent } from '../../pages/about-page/about-page.component';
import { LandingPageComponent } from '../../pages/landing-page/landing-page.component';
import { ProjectContainerComponent } from '../project-container/project-container.component';
import { ProjectsPageComponent } from '../../pages/projects-page/projects-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, LandingPageComponent, ProjectContainerComponent, ProjectsPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
