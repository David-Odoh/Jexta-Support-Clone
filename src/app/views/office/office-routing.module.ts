import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TicketNewComponent } from './components/ticket-new/ticket-new.component';
import { TicketViewComponent } from './components/ticket-view/ticket-view.component';
import { TicketPageComponent } from './ticket-page/ticket-page.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: 'ticket', pathMatch: "full"
  },
  {
    path: "front",
    redirectTo: 'ticket', pathMatch: "full"
  },
  {
    path: "orders",
    redirectTo: 'ticket', pathMatch: "full"
  },
  // ***********
  {
    path: "dashboard",
    redirectTo: 'ticket', pathMatch: "full"
  },
  {
    path: "ticket",
    component: TicketPageComponent,
    children: [
      { path: '', redirectTo: 'new', pathMatch: "full" },
      { path: 'new', component: TicketNewComponent },
      { path: 'view', component: TicketViewComponent },
      { path: '**', redirectTo: 'new', pathMatch: "full" },
    ]
  },
  {
    path: "request",
    redirectTo: 'ticket', pathMatch: "full"
  },
  {
    path: "search",
    redirectTo: 'ticket', pathMatch: "full"
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OfficeRoutingModule { }
