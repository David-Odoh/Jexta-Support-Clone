import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AuthLayoutComponent } from './components/auth-layout/auth-layout.component';
import { StoreLayoutComponent } from './components/store-layout/store-layout.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { CustomizerComponent } from './components/customizer/customizer.component';
import { AccountMenuComponent } from './components/sidebar/account-menu/account-menu.component';
import { ExtrasMenuComponent } from './components/sidebar/extras-menu/extras-menu.component';
import { DirectiveModule } from './directives/directive.module';

const exportedClasses = [
  AuthLayoutComponent,
  StoreLayoutComponent,
  SidebarComponent,
  CustomizerComponent,
  AccountMenuComponent,
  ExtrasMenuComponent,
]

@NgModule({
  declarations: exportedClasses,
  imports: [
    CommonModule,
    RouterModule,
    NgbModule,
    DirectiveModule
  ],
  exports: exportedClasses
})
export class SharedModule { }
