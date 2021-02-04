import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoCacheHeadersInterceptor } from './interceptors/no-cache-header.interceptor';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { PwaModule } from './services/pwa/pwa.module';
import { AuthModule } from './services/auth/auth.module';
import { StorageModule } from './services/storage/storage.module';
import { FlexCustomBreakpointsModule } from './flex-custom-breakpoints/flex-custom-breakpoints.module';

/**
 *  In Core Module we place all singleton services and
 *  modules that will be used across the app but
 *  only need to be imported once.
 */

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    AuthModule,
    PwaModule,
    StorageModule,
    FlexCustomBreakpointsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: NoCacheHeadersInterceptor,
      multi: true,
    },
  ],
})
export class CoreModule {}
