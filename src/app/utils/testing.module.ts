import { NgModule, Directive } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from '@core/core.module';
import { SharedModule } from '@shared/shared.module';

/**
 * Create fake routerLinkActive directive to fix RouterTestingModule
 */
@Directive({
	// tslint:disable:directive-selector
	selector: '[routerLinkActive]',
	exportAs: 'routerLinkActive',
})
export class RouterLinkActiveDirective {}

@NgModule({
	declarations: [RouterLinkActiveDirective],
	imports: [
		CommonModule,
		NoopAnimationsModule,
		RouterTestingModule,
		ReactiveFormsModule,
		CoreModule,
		SharedModule,
	],
	exports: [
		RouterTestingModule,
		RouterLinkActiveDirective,
		CoreModule,
		SharedModule,
	],
	providers: [],
})
export class TestingModule {}
