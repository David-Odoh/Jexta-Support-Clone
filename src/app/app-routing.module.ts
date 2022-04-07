import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthLayoutComponent } from './shared/components/auth-layout/auth-layout.component';
import { StoreLayoutComponent } from './shared/components/store-layout/store-layout.component';


const routes: Routes = [
  {
    path: "",
    redirectTo: "office",
    pathMatch: "full",
  },
  {
    path: "",
    component: AuthLayoutComponent,
    children: [
      {
        path: "sessions",
        loadChildren: () =>
          import("./views/sessions/sessions.module").then(
            (m) => m.SessionsModule
          ),
      },
    ],
  },
  {
    path: "",
    component: StoreLayoutComponent,
    children: [
      {
        path: "office",
        loadChildren: () =>
          import("./views/office/office.module").then((m) => m.OfficeModule),
      },
    ],
  },
  {
    path: "**",
    redirectTo: "office/dashboard",
    pathMatch: "full",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule { }