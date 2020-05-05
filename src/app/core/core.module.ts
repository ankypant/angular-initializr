import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoCacheHeadersInterceptor } from './interceptor/no-cache-header.interceptor';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [CommonModule, HttpClientModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: NoCacheHeadersInterceptor,
      multi: true,
    },
  ],
})
export class CoreModule {}