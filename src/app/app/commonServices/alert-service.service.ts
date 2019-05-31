import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor() { }
  alertOk(message: string = 'Success!') {
    Swal.fire(message, '', 'success');
  }

  alertNotOk(message: string = 'Error!') {
    Swal.fire(message, '', 'error');
  }

  toast(message: string) {
    return Swal.mixin({
      toast: true,
      position: 'bottom-end',
      showConfirmButton: false,
      timer: 5000
    }).fire({
      type: 'success',
      title: message
    })
  }

 
  }

