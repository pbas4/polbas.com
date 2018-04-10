import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { NgModule, ModuleWithProviders } from '@angular/core';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', loadChildren: 'app/modules/home/home.module#HomeModule' },
    { path: 'projects', loadChildren: 'app/modules/projects/projects.module#ProjectsModule' },
    { path: 'about', loadChildren: 'app/modules/about/about.module#AboutModule' }
];

export const APP_ROUTES: ModuleWithProviders = RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules });

