import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ABudgetComponent } from './app/budgets/a-budget/a-budget.component';
import { MBudgetsComponent } from './app/budgets/m-budgets/m-budgets.component';
import { FormsModule } from '@angular/forms';
import { ACategoryComponent } from './app/categories/a-category/a-category.component';
import { MCategoriesComponent } from './app/categories/m-categories/m-categories.component';
import { RegisterComponent } from './app/auth/register/register.component';
import { LoginComponent } from './app/auth/login/login.component';
import { AuthService } from './app/auth/auth.service';
// Firebase
import {AngularFireModule} from 'angularfire2'
import {AngularFirestoreModule} from 'angularfire2/firestore'
import {AngularFireAuthModule} from 'angularfire2/auth'
import { environment } from 'src/environments/environment.prod';
import { NavbarComponent } from './app/navbar/navbar.component';
import { BudgetService } from './app/budgets/budget.service';
import { CategoryService } from './app/categories/category.service';
import { DashboardComponent } from './app/dashboard/dashboard.component';
import { ChartsModule } from 'ng2-charts';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { EditCategoryComponent } from './app/categories/edit-category/edit-category.component';
import { AddBudgetComponent } from './app/budgets/add-budget/add-budget.component';
import { BudgetsDashboardComponent } from './app/budgets/budgets-dashboard/budgets-dashboard.component';
import { IncomesPieChartComponent } from './app/incomes/incomes-pie-chart/incomes-pie-chart.component';
import { DashboardCategoriesComponent } from './app/categories/dashboard-categories/dashboard-categories.component';
import { EditBudgetComponent } from './app/budgets/edit-budget/edit-budget.component';
import { FaqComponent } from './app/faq/faq.component';
import { PieChartCategoriesComponent } from './app/categories/pie-chart-categories/pie-chart-categories.component';
import { BalanceComponent } from './app/budgets/balance/balance.component';
import { TransferModalComponent } from './app/budgets/transfer-modal/transfer-modal.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';




@NgModule({
  declarations: [
    AppComponent,
    ABudgetComponent,
    MBudgetsComponent,
    ACategoryComponent,
    MCategoriesComponent,
    RegisterComponent,
    LoginComponent,
    NavbarComponent,
    DashboardComponent,
    EditCategoryComponent,
    AddBudgetComponent,
    BudgetsDashboardComponent,
    IncomesPieChartComponent,
    DashboardCategoriesComponent,
    EditBudgetComponent,
    PieChartCategoriesComponent,
    BalanceComponent,
    TransferModalComponent,
    
  ],
  imports: [
  BrowserModule,
     NgbModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase, 'coin2'),
    AngularFirestoreModule,
    AngularFireAuthModule,
    ChartsModule,
    AngularFireStorageModule,
    HttpClientModule
    
  ],
  providers: [AuthService, BudgetService, CategoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
