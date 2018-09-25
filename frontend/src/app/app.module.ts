import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

//signUp component imported
import { SignupComponent } from './signup/signup.component';

//import RouterModules and Routes for navigation and routing...
import { RouterModule, Routes } from '@angular/router';

import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { HttpModule } from '@angular/http';
import { HttpRequestService } from './service/http-request.service';
import { AgmCoreModule } from '@agm/core';
import { BsDropdownModule } from 'ngx-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { ModalModule } from 'ngx-bootstrap';
import { AlwaysAuthGuard } from './AlwaysAuthGuard';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { IsAdminGuard } from './IsAdminGuard';

//declaring our application routes...
const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'dashboard', component: AdminDashboardComponent , canActivate: [IsAdminGuard]},
  { path: 'user_profile', component: ProfileComponent, canActivate: [AlwaysAuthGuard]}
];

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    ProfileComponent,
    AdminDashboardComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    BsDropdownModule.forRoot(),
    HttpClientModule,
    ModalModule.forRoot(),
    /*
    agm maps for angular...
    */
    AgmCoreModule.forRoot({
      apiKey : "AIzaSyCdRjEKrzYALbcgy8UqardJa0n54Lml3XU",
      libraries: ["geometry","places"]
    }),

    /*
    appRoutes variable imported which declared above...
    */
    RouterModule.forRoot(
      appRoutes,
      // { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [HttpRequestService, AlwaysAuthGuard, IsAdminGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
