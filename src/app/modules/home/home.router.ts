import { Routes, RouterModule } from '@angular/router';
import { NgModule, ModuleWithProviders } from '@angular/core';

import { DashboardComponent } from "./components";

const routes: Routes = [
    { path: '', component: DashboardComponent }
];

export const HOME_ROUTES: ModuleWithProviders = RouterModule.forChild(routes);

