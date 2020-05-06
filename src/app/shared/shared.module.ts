import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatTabsModule } from '@angular/material/tabs';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatRippleModule } from '@angular/material/core';

/**
 * Angular Material modules
 */
const ngMaterialModules: any[] = [
	MatChipsModule,
	MatDatepickerModule,
	MatIconModule,
	MatInputModule,
	MatRippleModule,
	MatTabsModule,
	MatToolbarModule,
	MatButtonModule,
];

/**
 * Shared components, pipes, directives
 */
import * as fromComponents from './components';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
	declarations: [
		...fromComponents.components,
		// ...fromPipes.pipes,
	],
	imports: [
		CommonModule,
		FlexLayoutModule,
		RouterModule,
		FormsModule,
		ReactiveFormsModule,
		...ngMaterialModules,
	],
	exports: [
		FlexLayoutModule,
		FormsModule,
		ReactiveFormsModule,
		...fromComponents.components,
		// ...fromPipes.pipes,
		...ngMaterialModules,
	],
})
export class SharedModule {}
