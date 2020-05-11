import { NgModule, Directive } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule } from '@angular/forms';

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
	],
	exports: [RouterLinkActiveDirective],
	providers: [],
})
export class TestingModule {}
