import { NgModule } from '@angular/core';

import { HOME_ROUTES } from './home.router';

import { SharedModule } from '../shared/shared.module';

import { DashboardComponent } from './components';

@NgModule({
	declarations: [
		DashboardComponent
	],
	imports: [ 
		HOME_ROUTES,
		SharedModule
	],
	exports: [],
	providers: []
})
export class HomeModule {}