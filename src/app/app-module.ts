import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app.component';
import { AdminPanelComponent } from './features/admin-panel/admin-panel.component';

import { InputBoxsComponent } from './features/admin-panel/components/input-boxs/input-boxs.component';
import { DetailsComponent } from './features/admin-panel/components/details/details.component';
import { SigninButtonComponent } from './features/admin-panel/components/signin-button/signin-button.component';
import { UserComponent } from './features/user/user.component';

import { ComponentsComponent } from './features/user/components/components.component';


import { NavBarComponent } from './features/nav-bar/nav-bar.component';


import { FormsModule } from '@angular/forms';
import { SignUpComponent } from './features/sign-up/sign-up.component';
import { SignUpEmailComponent } from './features/sign-up-email/sign-up-email.component';
import { ButtonDetailsComponent } from './features/sign-up-email/button-details/button-details.component';

import { RecaptchaModule } from 'ng-recaptcha';
import { Error404Component } from './features/error404/error404.component';

@NgModule({
  declarations: [App, AdminPanelComponent, InputBoxsComponent, DetailsComponent, SigninButtonComponent,
     UserComponent, NavBarComponent, SignUpComponent, SignUpEmailComponent, ButtonDetailsComponent, Error404Component],
  imports: [BrowserModule, AppRoutingModule, FormsModule, RecaptchaModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
