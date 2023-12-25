import { Component } from '@angular/core';
import { FooterComponent } from '../../components/footer/footer.component';
import { NavbarComponent } from '../../components/header/navbar/navbar.component';
import { TopMenuComponent } from '../../components/header/top-menu/top-menu.component';
import { CourseContainerComponent } from '../../components/course-container/course-container.component';
import { COURSES } from '../../services/data/education.data';
import { Course } from '../../services/interfaces/course';

@Component({
  selector: 'education-page',
  standalone: true,
  imports: [FooterComponent, NavbarComponent, TopMenuComponent, CourseContainerComponent],
  templateUrl: './education-page.component.html',
  styleUrl: './education-page.component.css'
})
export class EducationPageComponent {
  courses: Course[] = COURSES;
}
