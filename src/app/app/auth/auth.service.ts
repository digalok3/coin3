import { Injectable } from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import { Router } from '@angular/router';
import { AngularFirestore } from 'angularfire2/firestore';
import { map } from 'rxjs/operators';





@Injectable({
  providedIn: 'root'
})
export class AuthService { 
  authState: any;
  currentId: string;

  constructor(
    private afAuth: AngularFireAuth,
    private router:Router,
    private afDB: AngularFirestore,
    ) {
    this.afAuth.authState.subscribe((auth) => {   
    this.authState = auth
  });
 
}

get authenticated(): boolean {
  return this.authState !== null;
}

get currentUserId(): string {
  return this.authenticated ? this.authState.uid : '';
}

  login(email: string, password: string) {
    return new Promise((resolve, reject)=> {
      this.afAuth.auth.signInWithEmailAndPassword(email,password)
      .then(userData => {
        resolve(userData),
      err=> reject(err)}
      )
    })    
  }

   getAuth() {
    return this.afAuth.authState.pipe(auth=> auth);
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

  logout() {
    this.afAuth.auth.signOut()
  }

  register(email: string, password: string) {
    return new Promise((resolve, reject) => {
      this.afAuth.auth.createUserWithEmailAndPassword(email,password)
      .then(userData=> resolve(userData),
      err => reject(err)
      )
    })
  }
}
