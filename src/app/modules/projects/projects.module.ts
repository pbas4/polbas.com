import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PROJECTS_ROUTES } from './projects.router';

import { SharedModule } from '../shared/shared.module';

import { ProjectsComponent, ProjectsSliderComponent } from './components';

@NgModule({
  declarations: [
    ProjectsComponent,
    ProjectsSliderComponent
  ],
  imports: [
    PROJECTS_ROUTES,
    SharedModule,
    CommonModule
  ],
  providers: []
})
export class ProjectsModule { }
