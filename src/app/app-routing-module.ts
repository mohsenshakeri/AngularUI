import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPanelComponent } from './features/admin-panel/admin-panel.component';
import { DetailsComponent } from './features/admin-panel/components/details/details.component';
import { UserComponent } from './features/user/user.component';

const routes: Routes = [{ path: '', component: UserComponent },
  { path: 'adminpanel', component: AdminPanelComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
