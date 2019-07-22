import { Injectable } from '@angular/core';
import { BudgetModel } from './a-budget/a-budget.model';
import { AuthService } from './../auth/auth.service';
import { AngularFirestore } from 'angularfire2/firestore';
import { map } from 'rxjs/operators';
import firebase from '@firebase/app';
import '@firebase/firestore';
import { BehaviorSubject } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class BudgetService  {
  currentId: any;
  transferMoney = new BehaviorSubject<any>({id: ''});

  constructor(
    private authService: AuthService,
    private afDB: AngularFirestore
  ) {
    }

  addBudget(budget: BudgetModel)  {
      this.afDB.collection('users').doc(`${this.authService.currentUserId}`).collection('budgets').add({...budget});
    
   }

 


  getBudgets()  {
        return this.afDB.collection('users').doc(`${this.authService.currentUserId}`).collection('budgets').snapshotChanges().pipe(
      map((docData) => {
        return docData.map( doc => {
          return {
            id: doc.payload.doc.id,
            ...doc.payload.doc.data()
          };
        });
      })
    );
  }
  plusMoneyToABudget(id: string, value: number, budgetName: string, curCurrency: string) {
// tslint:disable-next-line: max-line-length
    this.afDB.collection('users').doc(`${this.authService.currentUserId}`).collection('budgets').doc(`${id}`).update({money: firebase.firestore.FieldValue.increment(Number(value))});

// tslint:disable-next-line: max-line-length
    this.afDB.collection('users').doc(`${this.authService.currentUserId}`).collection(`incomes`).add({money: Number(value), date: new Date(), name: budgetName, currency: curCurrency });
  }
  plusMoneyToABudget2(id: string, value: number) {
// tslint:disable-next-line: max-line-length
    this.afDB.collection('users').doc(`${this.authService.currentUserId}`).collection('budgets').doc(`${id}`).update({money: firebase.firestore.FieldValue.increment(Number(value))});
  }

  minusMoneyToABudget(id: string, value: number) {
// tslint:disable-next-line: max-line-length
   this.afDB.collection('users').doc(`${this.authService.currentUserId}`).collection('budgets').doc(`${id}`).update({money: firebase.firestore.FieldValue.increment(-Number(value))});
  }

  deleteBudget(id: string): any {
    this.afDB.collection('users').doc(`${this.authService.currentUserId}`).collection('budgets').doc(`${id}`).delete()
  }

  updateBudget(budget: BudgetModel, id: any) {
    return this.afDB.collection('users').doc(`${this.authService.currentUserId}`).collection('budgets').doc(`${id}`).update({...budget})
  }


}
