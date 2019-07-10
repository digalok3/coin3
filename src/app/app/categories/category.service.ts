import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { AuthService } from './../auth/auth.service';
import { map } from 'rxjs/operators';
import firebase from '@firebase/app';
import '@firebase/firestore';
import { CategoryModel } from './a-category/a-category.model';



@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(
    private authService: AuthService,
    private afDB: AngularFirestore,
  ) { }


  addCategory(category: any)  {
    this.afDB.collection('users').doc(`${this.authService.currentUserId}`).collection('categories').add({...category});
      }

  getCategories()  {
    return this.afDB.collection('users').doc(`${this.authService.currentUserId}`).collection('categories').snapshotChanges().pipe(
  map((docData) => {
    return docData.map( doc => {
      return {
        id: doc.payload.doc.id,
        ...doc.payload.doc.data()
      };
    });
  })
)
}

addSumToCategory(id: string, value: number, categoryName: string) {
  this.afDB.collection('users').doc(`${this.authService.currentUserId}`).collection('categories').doc(`${id}`).update({money: firebase.firestore.FieldValue.increment(Number(value))})

  this.afDB.collection('users').doc(`${this.authService.currentUserId}`).collection(`expenses`).add({money: Number(value), date: new Date(), name: categoryName});
}

updateCategory(category: CategoryModel, id: any, photoUrl: string) {
  return this.afDB.collection('users').doc(`${this.authService.currentUserId}`).collection('categories').doc(`${id}`).update({...category, photoURL: photoUrl })
}

deleteCategory(id: string): any {
  this.afDB.collection('users').doc(`${this.authService.currentUserId}`).collection('categories').doc(`${id}`).delete()
}




}
