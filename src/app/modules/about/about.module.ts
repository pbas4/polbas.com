import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ABOUT_ROUTES } from './about.router';

import { SharedModule } from '../shared/shared.module';

import { AboutComponent, DescriptionComponent, StudiesComponent } from './components';

@NgModule({
  declarations: [
    AboutComponent,
    StudiesComponent,
    DescriptionComponent
  ],
  imports: [
    ABOUT_ROUTES,
    SharedModule,
    CommonModule
  ],
  providers: []
})
export class AboutModule { }
