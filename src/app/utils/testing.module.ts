import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from '@core/core.module';
import { SharedModule } from '@shared/shared.module';

@NgModule({
	imports: [
		CommonModule,
		NoopAnimationsModule,
		RouterTestingModule,
		ReactiveFormsModule,
		CoreModule,
		SharedModule,
	],
	exports: [CoreModule, RouterTestingModule, SharedModule],
})
export class TestingModule {}
