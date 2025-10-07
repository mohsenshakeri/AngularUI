import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPanelComponent } from './features/admin-panel/admin-panel.component';
import { DetailsComponent } from './features/admin-panel/components/details/details.component';
import { UserComponent } from './features/user/user.component';
import { SignUpComponent } from './features/sign-up/sign-up.component';
import { SignUpEmailComponent } from './features/sign-up-email/sign-up-email.component';
import { Error404Component } from './features/error404/error404.component';
import { UserListAdminComponent } from './features/user-list-admin/user-list-admin.component';

const routes: Routes = [
  { path: 'userlist', component: UserListAdminComponent },
  { path: '404', component: Error404Component },
  { path: 'user', component: UserComponent },
  { path: 'login', component: AdminPanelComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'signupemail', component: SignUpEmailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
