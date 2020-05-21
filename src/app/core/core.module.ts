import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoCacheHeadersInterceptor } from './interceptors/no-cache-header.interceptor';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthService } from './services/auth/auth.service';
import { StorageService } from './services/storage/storage.service';

@NgModule({
	declarations: [],
	imports: [CommonModule, HttpClientModule],
	providers: [
		{
			provide: HTTP_INTERCEPTORS,
			useClass: NoCacheHeadersInterceptor,
			multi: true,
		},
		AuthService,
		StorageService,
	],
})
export class CoreModule {}
