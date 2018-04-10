import { Routes, RouterModule } from '@angular/router';
import { NgModule, ModuleWithProviders } from '@angular/core';

import { AboutComponent, DescriptionComponent, StudiesComponent } from './components';

const routes: Routes = [
    { path: '', component: AboutComponent }
];

export const ABOUT_ROUTES: ModuleWithProviders = RouterModule.forChild(routes);
