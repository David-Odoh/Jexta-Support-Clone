import { Component, HostListener, Input, OnInit } from '@angular/core';
import { Utils } from 'src/app/shared/models/utils';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  mtitle = 'ICEBOX';
  @Input() title = 'ICEBOX';
  ifMobile = new Utils().isMobile();

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.ifMobile = new Utils().isMobile();
    console.log('ifMobile', this.ifMobile)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
