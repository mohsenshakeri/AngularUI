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

import { UserListComponent } from './features/user/components/user-list/user-list.component';
import { NavBarComponent } from './features/nav-bar/nav-bar.component';

@NgModule({
  declarations: [App, AdminPanelComponent, InputBoxsComponent, DetailsComponent, SigninButtonComponent, UserComponent, UserListComponent, ComponentsComponent, NavBarComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
