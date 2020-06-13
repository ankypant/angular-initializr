import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoCacheHeadersInterceptor } from './interceptors/no-cache-header.interceptor';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { PwaModule } from './services/pwa/pwa.module';
import { AuthModule } from './services/auth/auth.module';
import { StorageModule } from './services/storage/storage.module';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    AuthModule,
    PwaModule,
    StorageModule,
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
