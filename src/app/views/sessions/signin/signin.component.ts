import { Component, HostBinding, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { SafeStyle, DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  _iceboxBtnMssg = 'SignIn';
  iceboxForm;
  model;
  agreed = false;

  @HostBinding('style')
  get style(): SafeStyle {
    return this.sanitizer.bypassSecurityTrustStyle(`width: 100%;`);
  };

  constructor(private sanitizer: DomSanitizer, public fb: FormBuilder, public router: Router) { }

  ngOnInit() {
    this.createForm();
  }

  agreeWithTAC() {
    this.agreed = !this.agreed;
  }


  submit() {
    this.model = {
      email: this.iceboxForm.controls['email'].value,
      password: this.iceboxForm.controls['password'].value,
    }
  }



  createForm() {
    this.iceboxForm = this.fb.group({
      email: this.fb.control('', [Validators.required, Validators.email]),
      password: this.fb.control('', [Validators.required, Validators.minLength(6)])
    });
  }

}
