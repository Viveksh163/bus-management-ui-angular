import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BusManagementComponent } from "./bus-management.component";

export const routes: Routes = [
    // { path: 'bus-management', component: BusManagementComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class busManagementRoutingModule { }