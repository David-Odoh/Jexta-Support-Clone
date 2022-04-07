import { Component, HostBinding, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { SafeStyle, DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  _iceboxBtnMssg = 'Create Account';
  Venactive: boolean;
  Custactive: boolean;
  userTypeId = 1;
  iceboxForm;
  vendorIceboxForm;
  userTypeSelector = 1;
  one = 1;
  cooperative_data: string[];

  @HostBinding('style')
  get style(): SafeStyle {
    return this.sanitizer.bypassSecurityTrustStyle(`width: 100%;`);
  };

  constructor(private sanitizer: DomSanitizer, public fb: FormBuilder,
    public router: Router,
  ) {
  }

  ngOnInit() {
    this.activeCustomer();
    this.createForm();
    this.createVendorForm();
  }

  customerModel;
  vendorModel;


  activeCustomer() {
    this.Custactive = true;
    this.Venactive = false;
    this.userTypeId = 1;
    this.userTypeSelector = 1;
  }

  activeVendor() {
    this.Venactive = true;
    this.Custactive = false;
    this.userTypeId = 2;
    this.userTypeSelector = 2;
  }

  icebox() {
  }

  vendorIcebox() {
  }

  createForm() {
    this.iceboxForm = this.fb.group({
      email: this.fb.control('', [Validators.required, Validators.email]),
      password: this.fb.control('', [Validators.required, Validators.minLength(6)]),
      username: this.fb.control('', [Validators.required])
    });
  }

  createVendorForm() {
    this.vendorIceboxForm = this.fb.group({
      vendorEmail: this.fb.control('', [Validators.required, Validators.email]),
      vendorPassword: this.fb.control('', [Validators.required, Validators.minLength(6)]),
      vendorUsername: this.fb.control('', [Validators.required])
    });
  }
}
