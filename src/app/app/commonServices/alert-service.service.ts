import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor() { }
  alertOk(message: string = 'Успешно!') {
    Swal.fire(message, '', 'success');
  }
}
