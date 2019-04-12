import { Injectable } from '@angular/core';
import { BudgetModel } from './a-budget/a-budget.model';
import { AuthService } from './../auth/auth.service';
import { AngularFirestore } from 'angularfire2/firestore';
import { map } from 'rxjs/operators';
import firebase from '@firebase/app';
import '@firebase/firestore';
import { AngularFireAuth } from 'angularfire2/auth';





@Injectable({
  providedIn: 'root'
})
export class BudgetService  {
  currentId: any;

  constructor(
    private authService: AuthService,
    private afDB: AngularFirestore,
    private afAuth: AngularFireAuth
  ) { 
    }

  addBudget(budget: BudgetModel)  {
 this.afDB.collection('users').doc(`${this.currentId}`).collection('budgets').add({...budget});
   }

  getBudgets()  {        
        return this.afDB.collection('users').doc(`${this.currentId}`).collection('budgets').snapshotChanges().pipe(
      map((docData) => {
        console.log(docData);
        return docData.map( doc => {
          return {
            id: doc.payload.doc.id,
            ...doc.payload.doc.data()
          };
        });
      })
    )
  }

  plusMoneyToABudget(id: string, value: number){ 
    this.afDB.collection('budgets').doc(`${id}`).update({money: firebase.firestore.FieldValue.increment(Number(value))})
    this.afDB.collection(`incomes`).add({money: Number(value), date: new Date(), id: id});
  }

  minusMoneyToABudget(id: string, value: number){ 
    this.afDB.collection('budgets').doc(`${id}`).update({money: firebase.firestore.FieldValue.increment(-Number(value))})
  }


}
