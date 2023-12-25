import { Routes } from '@angular/router';
import { LandingPageComponent } from '../../pages/landing-page/landing-page.component';
import { ProjectsPageComponent } from '../../pages/projects-page/projects-page.component';

export const routes: Routes = [
    {path: '', component: LandingPageComponent},
    {path: 'projects', component: ProjectsPageComponent}
];
