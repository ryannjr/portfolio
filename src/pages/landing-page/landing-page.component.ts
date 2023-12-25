import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TopMenuComponent } from '../../components/header/top-menu/top-menu.component';
import { HeaderComponent } from '../../components/header/header.component';
import { NavbarComponent } from '../../components/header/navbar/navbar.component';
import { HomePageComponent } from '../../pages/home-page/home-page.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { AboutPageComponent } from '../../pages/about-page/about-page.component';
@Component({
  selector: 'landing-page',
  standalone: true,
  imports: [CommonModule, RouterOutlet, TopMenuComponent, NavbarComponent, HomePageComponent, 
    FooterComponent, AboutPageComponent
    ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {

}
