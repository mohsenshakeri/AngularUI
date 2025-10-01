import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app.component';
import { AdminPanelComponent } from './features/admin-panel/admin-panel.component';
import { HeaderComponent } from './features/admin-panel/components/header/header.component';
import { FooterComponent } from './features/admin-panel/components/footer/footer.component';

@NgModule({
  declarations: [App, AdminPanelComponent, HeaderComponent, FooterComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
