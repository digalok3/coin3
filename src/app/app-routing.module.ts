import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './app/auth/register/register.component';
import { LoginComponent } from './app/auth/login/login.component';
import { DashboardComponent } from './app/dashboard/dashboard.component';
import { AuthGuard } from './app/auth/auth.guard';
import { EditCategoryComponent } from './app/categories/edit-category/edit-category.component';
import { MBudgetsComponent } from './app/budgets/m-budgets/m-budgets.component';
import { MCategoriesComponent } from './app/categories/m-categories/m-categories.component';
import { BudgetsDashboardComponent } from './app/budgets/budgets-dashboard/budgets-dashboard.component';
import { DashboardCategoriesComponent } from './app/categories/dashboard-categories/dashboard-categories.component';
import { EditBudgetComponent } from './app/budgets/edit-budget/edit-budget.component';
import { TransferModalComponent } from './app/budgets/transfer-modal/transfer-modal.component';

const routes: Routes = [
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: '', component: DashboardComponent, canActivate:[AuthGuard]},
  {path: 'category/edit/:id', component: EditCategoryComponent},
  {path: 'budget/edit/:id', component: EditBudgetComponent},
  {path: 'budget/transfer/:id', component: TransferModalComponent},
  {path: 'budgets', component: BudgetsDashboardComponent},
  {path: 'faq', loadChildren: './app/faq/faq.module#FaqModule'},
  {path: 'categories', component: DashboardCategoriesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule],
providers: [AuthGuard]
})
export class AppRoutingModule { }
