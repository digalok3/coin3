import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { AuthService } from './../auth/auth.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IncomesServiceService {

  constructor(
    private authService: AuthService,
    private afDB: AngularFirestore
  ) { }
  
  getIncomes()  {
    return this.afDB.collection('users').doc(`${this.authService.currentUserId}`).collection('incomes', ref=> ref.orderBy('date', 'desc').limit(10)).snapshotChanges().pipe(
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
  getEur(): Observable<any>  {
// tslint:disable-next-line: max-line-length
    return this.afDB.collection('users').doc(`${this.authService.currentUserId}`).collection('budgets', ref=> ref.where('currency','==', 'EUR')).snapshotChanges().pipe(
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
  getUSD(): Observable<any>  {
// tslint:disable-next-line: max-line-length
    return this.afDB.collection('users').doc(`${this.authService.currentUserId}`).collection('budgets', ref=> ref.where('currency','==', 'USD')).snapshotChanges().pipe(
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
  getRUB(): Observable<any>  {
// tslint:disable-next-line: max-line-length
    return this.afDB.collection('users').doc(`${this.authService.currentUserId}`).collection('budgets', ref=> ref.where('currency','==', 'RUB')).snapshotChanges().pipe(
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

  getExpenses()  {
    return this.afDB.collection('users').doc(`${this.authService.currentUserId}`).collection('expenses', ref=> ref.orderBy('date', 'desc').limit(10)).snapshotChanges().pipe(
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
}


