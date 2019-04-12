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


@NgModule({
  declarations: [
    AppComponent,
    ABudgetComponent,
    MBudgetsComponent,
    ACategoryComponent,
    MCategoriesComponent,
    RegisterComponent,
    LoginComponent,
    NavbarComponent
  ],
  imports: [  

BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase, 'coin2'),
    AngularFirestoreModule,
    AngularFireAuthModule,
  ],
  providers: [AuthService, BudgetService, CategoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
