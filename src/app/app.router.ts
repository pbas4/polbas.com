import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { NgModule, ModuleWithProviders } from '@angular/core';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', loadChildren: 'app/modules/home/home.module#HomeModule' }
];

export const APP_ROUTES: ModuleWithProviders = RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules });

