import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SessionsRoutingModule } from './sessions-routing.module';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { ForgotComponent } from './forgot/forgot.component';


@NgModule({
  declarations: [SigninComponent, SignupComponent, ForgotComponent],
  imports: [
    CommonModule,
    SessionsRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SessionsModule { }
