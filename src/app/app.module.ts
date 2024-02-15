import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PrimeModule } from './prime-module';


import { DashboardPanelComponent } from './Components/DashboardPanel/dashboard-panel/dashboard-panel.component';
import { GroupCardComponent } from './Components/GroupCard/group-card/group-card.component';
import { TopBarComponent } from './Components/TopBar/top-bar/top-bar.component';
import { ExpenseComponent } from './Components/Expense/expense/expense.component';
import { GroupHeaderComponent } from './Components/GroupHeader/group-header/group-header.component';
import { BalanceListItemComponent } from './Components/BalanceListItem/balance-list-item/balance-list-item.component';
import { LoginComponent } from './Components/LogIn/login/login.component';
import { SignupComponent } from './Components/SignUp/signup/signup.component';
import { AddGroupComponent } from './Components/AddGroup/add-group/add-group.component';
import { AddExpenseComponent } from './Components/AddExpense/add-expense/add-expense.component';
import { SettingsComponent } from './Components/Settings/settings/settings.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    DashboardPanelComponent,
    GroupCardComponent,
    TopBarComponent,
    ExpenseComponent,
    GroupHeaderComponent,
    BalanceListItemComponent,
    LoginComponent,
    SignupComponent,
    AddGroupComponent,
    AddExpenseComponent,
    SettingsComponent,
    routingComponents
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    PrimeModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
