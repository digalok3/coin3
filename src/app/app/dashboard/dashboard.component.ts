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
      title: 'Are you sure?',
      text: "You won't be able to revert this! All hints will disappear!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#5bc0de',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    })
    .then((result) => {
      if (result.value) {
        this.isFirstLoggedIn = false;
      }
    });
  }

}
