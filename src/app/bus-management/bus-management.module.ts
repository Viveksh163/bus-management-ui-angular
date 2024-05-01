import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusManagementComponent } from './bus-management.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginPageComponent } from './login-page/login-page.component';


@NgModule({
  imports: [
    CommonModule, ReactiveFormsModule,FormsModule
  ],
  declarations: [BusManagementComponent,TopBarComponent,SideBarComponent,LoginPageComponent
  ],
  providers: [],
  // bootstrap: [AppComponent]
})
export class BusManagementModule { }
