import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HOME_ROUTES } from './home.router';

import { SharedModule } from '../shared/shared.module';

import { DashboardComponent } from './components';

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    HOME_ROUTES,
    SharedModule,
    CommonModule
  ],
  providers: []
})
export class HomeModule { }
