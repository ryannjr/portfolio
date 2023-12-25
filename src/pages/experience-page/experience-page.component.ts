import { Component } from '@angular/core';
import { FooterComponent } from '../../components/footer/footer.component';
import { NavbarComponent } from '../../components/header/navbar/navbar.component';
import { TopMenuComponent } from '../../components/header/top-menu/top-menu.component';

@Component({
  selector: 'experience-page',
  standalone: true,
  imports: [FooterComponent, TopMenuComponent, NavbarComponent],
  templateUrl: './experience-page.component.html',
  styleUrl: './experience-page.component.css'
})
export class ExperiencePageComponent {

}
