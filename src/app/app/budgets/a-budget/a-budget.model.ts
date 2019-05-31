export interface BudgetModel {
    name: string;
    money: number;
    id?: number;
    date?: Date;
    currency?: string
  }

export interface IncomeModel {
  name?: string;
  money: number;
  id?: number;
  date: Date;
}


