import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'extras-menu',
  templateUrl: './extras-menu.component.html',
  styleUrls: ['./extras-menu.component.scss']
})
export class ExtrasMenuComponent implements OnInit {
  @Input() extraPageMenu = false;
  @Input() extraPagesLinks = [];

  @HostBinding("class")
  get dynamicClass() {
    return "dropdown-menu etxrasMenu float_menu"; // Uploaded
  }

  constructor() { }

  ngOnInit(): void {
  }


}
