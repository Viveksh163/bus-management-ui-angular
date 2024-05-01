import { RouterModule, Routes } from '@angular/router';
import { BusManagementComponent } from './bus-management/bus-management.component';
import { NgModule } from '@angular/core';
import { LoginPageComponent } from './bus-management/login-page/login-page.component';

export const routes: Routes = [
    { path: 'bus-management', component: LoginPageComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }