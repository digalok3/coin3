import { Injectable } from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import { BehaviorSubject } from 'rxjs';
import { AlertService } from './../commonServices/alert-service.service';


@Injectable({
  providedIn: 'root'
})
export class AuthService { 
  authState: any;
  isFirstLogin = new BehaviorSubject<boolean>(false);
  userUid = new BehaviorSubject<string>('');

  constructor(
    private afAuth: AngularFireAuth,
    private alertService: AlertService
    ) { 
      this.afAuth.authState.subscribe((auth) => {
        this.authState = auth
      });
  }

  get authenticated(): boolean {
    return this.authState
  }

  get currentUserId(): string {
    return this.authState ? this.authState.uid : '';
  }

  login(email:string, password:string) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then((user) => {
          this.authState = user.user
          if (user.user.metadata.creationTime === user.user.metadata.lastSignInTime) {
            this.isFirstLogin.next(true)
          }
        // }
      })
      .catch(error =>  this.alertService.alertNotOk(error.message));
 }

   getAuth() {
    return this.afAuth.authState.pipe(auth=> auth);
  }

    getFirstLogin() {
        if (this.authState.user.metadata.creationTime === this.authState.user.metadata.lastSignInTime)
        { return true
        }
        else {
          return false
        }
  }

  
  logout() {
    this.afAuth.auth.signOut(); 
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
