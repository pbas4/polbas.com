import { NgModule, ModuleWithProviders } from '@angular/core';

import { HeaderComponent, FooterComponent } from './components';

@NgModule({
	declarations: [
		HeaderComponent,
		FooterComponent
	],
	imports: [],
	exports: [
		HeaderComponent,
		FooterComponent
	],
	providers: []
})
export class SharedModule {
	static forRoot(): ModuleWithProviders {
		return {
			ngModule: SharedModule,
			providers: []
		}
	}
}