import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app.component';
import { AdminPanelComponent } from './features/admin-panel/admin-panel.component';

import { InputBoxsComponent } from './features/admin-panel/components/input-boxs/input-boxs.component';
import { DetailsComponent } from './features/admin-panel/components/details/details.component';
import { SigninButtonComponent } from './features/admin-panel/components/signin-button/signin-button.component';
import { UserComponent } from './features/user/user.component';

import { NavBarComponent } from './features/nav-bar/nav-bar.component';


import { FormsModule } from '@angular/forms';
import { SignUpComponent } from './features/sign-up/sign-up.component';
import { SignUpEmailComponent } from './features/sign-up-email/sign-up-email.component';
import { ButtonDetailsComponent } from './features/sign-up-email/button-details/button-details.component';

import { RecaptchaModule } from 'ng-recaptcha';
import { Error404Component } from './features/error404/error404.component';
import { UserListAdminComponent } from './features/user-list-admin/user-list-admin.component';
import { UiballComponent } from './features/uiball/uiball.component';
import { DetailItemComponent } from './features/detail-item/detail-item.component';
import { ImagesViewComponent } from './features/detail-item/images-view/images-view.component';
import { ReservationCardComponent } from './features/detail-item/reservation-card/reservation-card.component';
import { ModernApartmentComponent } from './features/detail-item/modern-apartment/modern-apartment.component';
import { GhestServicesCardComponent } from './features/detail-item/ghest-services-card/ghest-services-card.component';
import { SafetyCardComponent } from './features/detail-item/safety-card/safety-card.component';
import { RateComponent } from './features/detail-item/rate/rate.component';
import { UserCommentComponent } from './features/detail-item/user-comment/user-comment.component';
import { StayUpdateComponent } from './features/detail-item/stay-update/stay-update.component';
import { InfoOptionsComponent } from './features/detail-item/info-options/info-options.component';
import { InfoLeftSideComponent } from './features/detail-item/info-left-side/info-left-side.component';
import { DetailItemFooterComponent } from './features/detail-item/detail-item-footer/detail-item-footer.component';
import { ApartmentDescriptionComponent } from './features/detail-item/apartment-description/apartment-description.component';

@NgModule({
  declarations: [App, AdminPanelComponent, InputBoxsComponent, DetailsComponent, SigninButtonComponent,
     UserComponent, NavBarComponent, SignUpComponent, SignUpEmailComponent, ButtonDetailsComponent,
      Error404Component, UserListAdminComponent, UiballComponent, DetailItemComponent, ImagesViewComponent,
       ReservationCardComponent, ModernApartmentComponent, GhestServicesCardComponent, SafetyCardComponent,
        RateComponent, UserCommentComponent, StayUpdateComponent, InfoOptionsComponent, InfoLeftSideComponent, DetailItemFooterComponent, ApartmentDescriptionComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, RecaptchaModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
