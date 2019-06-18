import { Component, OnInit } from '@angular/core';
import { AuthService } from './../auth/auth.service';
import Swal from 'sweetalert2';




@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']})


export class DashboardComponent implements OnInit {
  profileUrl: any;
  isFirstLoggedIn: boolean = false
 

  constructor(
    private afAuth: AuthService,
  ) {

   }

   ngOnInit() {
     this.afAuth.isFirstLogin.subscribe(val => this.isFirstLoggedIn = val);
  }

  closeHint() {
    Swal.fire({
      title: 'Вы уверены?',
      text: "Вы не сможете вернуть подсказки обратно!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#5bc0de',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Удалить',
      cancelButtonText: 'Отменить операцию'
    })
    .then((result) => {
      if (result.value) {
        this.isFirstLoggedIn = false;
      }
    });
  }

}
