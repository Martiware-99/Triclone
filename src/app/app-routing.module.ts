import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './Pages/Dashboard/dashboard/dashboard.component';
import { GroupComponent } from './Pages/Group/group/group.component';
import { LoginPageComponent } from './Pages/LogIn/login-page/login-page.component';
import { SignupPageComponent } from './Pages/SignUp/signup-page/signup-page.component';
import { MyExpensesComponent } from './Pages/MyExpenses/my-expenses/my-expenses.component';
import { MyGroupsComponent } from './Pages/MyGroups/my-groups/my-groups.component';
import { ProfileSettingsComponent } from './Pages/ProfileSettings/profile-settings/profile-settings.component';
import { GroupSettingsComponent } from './Pages/GroupSettings/group-settings/group-settings.component';

const routes: Routes = [
  {path:'dashboard', component: DashboardComponent },
  {path:'group', component: GroupComponent},
  {path:'login', component: LoginPageComponent },
  {path:'signup', component: SignupPageComponent },
  {path:'myexpenses', component: MyExpensesComponent },
  {path:'mygroups', component:MyGroupsComponent },
  {path:'profile/settings', component: ProfileSettingsComponent},
  {path:'group/settings', component:GroupSettingsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [
  DashboardComponent,
  GroupComponent,
  LoginPageComponent,
  SignupPageComponent,
  MyExpensesComponent,
  MyGroupsComponent,
  ProfileSettingsComponent,
  GroupSettingsComponent
]
