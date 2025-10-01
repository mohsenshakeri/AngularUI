import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app.component';
import { AdminPanelComponent } from './features/admin-panel/admin-panel.component';
import { FooterComponent } from './features/admin-panel/components/footer/footer.component';
import { InputBoxsComponent } from './features/admin-panel/components/input-boxs/input-boxs.component';
import { DetailsComponent } from './features/admin-panel/components/details/details.component';
import { SigninButtonComponent } from './features/admin-panel/components/signin-button/signin-button.component';

@NgModule({
  declarations: [App, AdminPanelComponent, FooterComponent, InputBoxsComponent, DetailsComponent, SigninButtonComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
