import { Component, OnInit } from '@angular/core';
import { Dictionary } from '../../models/dictionary';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  activeNavLink;
  accountMenu = false;
  accountMenu2 = false;
  extraPageMenu = false;

  terms_from_dic = new Dictionary().terms;

  navLinks = [
    { name: 'dashboard', url: '/office/dashboard', toolTip: 'Home', iconClasses: 'remix ri-computer-line' },
    { name: this.terms_from_dic[0].alias, url: '/office/ticket', toolTip: this.terms_from_dic[0].name, iconClasses: 'remix ri-file-text-line' },
    { name: this.terms_from_dic[1].alias, url: '/office/request', toolTip: this.terms_from_dic[1].name, iconClasses: 'remix ri-tools-line' },
    { name: 'search', url: '/office/search', toolTip: 'Search', iconClasses: 'remix ri-search-line' },
    { name: 'customers', url: '/office/customers', toolTip: 'Clients', iconClasses: 'remix ri-group-line' },
  ];

  accountLinks = [
    { url: '', name: 'Profile', iconClasses: 'ri-user-2-line' },
    { url: '', name: 'Settings', iconClasses: 'ri-settings-2-line' },
  ];

  extraPagesLinks = [
    { url: '/sessions/signin', name: 'Sign In', iconClasses: '' },
    { url: '/sessions/signup', name: 'Sign Up', iconClasses: '' },
    { url: '/sessions/forgot-password', name: 'Password', iconClasses: '' },
  ];

  constructor() {
    this.activeNavLink = this.navLinks[0];
  }

  ngOnInit(): void {
  }

  selectNavLink(link) {
    this.activeNavLink = link;
  }

  toggleMenu(trigger) {
    if (trigger == 'extra')
      this.extraPageMenu = !this.extraPageMenu;

    if (trigger == 'account')
      this.accountMenu = !this.accountMenu;

    if (trigger == 'account2')
      this.accountMenu2 = !this.accountMenu2;
  }

  close(trigger) {
    if (trigger == 'extra')
      this.extraPageMenu = false;

    if (trigger == 'account')
      this.accountMenu = false;

    if (trigger == 'account2')
      this.accountMenu2 = false;
  }

}
