import { Routes } from '@angular/router';
import { LandingPageComponent } from '../../pages/landing-page/landing-page.component';
import { ProjectsPageComponent } from '../../pages/projects-page/projects-page.component';
import { EducationPageComponent } from '../../pages/education-page/education-page.component';
import { ExperiencePageComponent } from '../../pages/experience-page/experience-page.component';

export const routes: Routes = [
    {path: '', component: LandingPageComponent},
    {path: 'projects', component: ProjectsPageComponent},
    {path: 'education', component: EducationPageComponent},
    {path: 'experience', component: ExperiencePageComponent},
];
