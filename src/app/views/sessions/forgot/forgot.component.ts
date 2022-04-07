import { Component, HostBinding, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { SafeStyle, DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.scss']
})
export class ForgotComponent implements OnInit {
  verificationForm;
  _iceboxBtnMssg = 'Get Reset Link'

  @HostBinding('style')
  get style(): SafeStyle {
    return this.sanitizer.bypassSecurityTrustStyle(`width: 100%;`);
  };

  constructor(private sanitizer: DomSanitizer, public fb: FormBuilder, public router: Router) { }

  ngOnInit() {
    this.createForm();
  }

  verification() {
  }

  createForm() {
    this.verificationForm = this.fb.group({
      email: this.fb.control('', [Validators.required, Validators.minLength(10), Validators.email])
    });
  }
}
