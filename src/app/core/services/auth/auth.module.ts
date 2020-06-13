import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './auth.service';
import { AuthGaurd } from './auth.gaurd';

@NgModule({
  imports: [CommonModule],
  providers: [AuthService, AuthGaurd],
})
export class AuthModule {}
