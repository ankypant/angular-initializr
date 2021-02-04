import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexCustomBreakpointsProvider } from './flex-custom-breakpoints';
@NgModule({
  imports: [CommonModule],
  providers: [FlexCustomBreakpointsProvider],
})
export class FlexCustomBreakpointsModule {}
