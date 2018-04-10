import { Routes, RouterModule } from '@angular/router';
import { NgModule, ModuleWithProviders } from '@angular/core';

import { ProjectsComponent } from './components';

const routes: Routes = [
    { path: '', component: ProjectsComponent }
];

export const PROJECTS_ROUTES: ModuleWithProviders = RouterModule.forChild(routes);
