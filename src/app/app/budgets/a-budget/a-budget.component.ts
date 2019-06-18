import { Component, OnInit, Input } from '@angular/core';
import { BudgetModel } from './a-budget.model';
import { BudgetService } from './../budget.service';
import { AlertService } from './../../commonServices/alert-service.service';
import Swal from 'sweetalert2';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-a-budget',
  templateUrl: './a-budget.component.html',
  styleUrls: ['./a-budget.component.css']
})

export class ABudgetComponent implements OnInit {
  closeResult: string;
  @Input()
  budget: BudgetModel;

  @Input()
  isEdit: boolean;

  constructor(
    private budgetService: BudgetService,
    private alertService: AlertService,
    private modalService: NgbModal
    ) {
      }

  ngOnInit() {
    
  }

  plusMoney(value: number, id: string, budgetName: string): void {
    if(value>0){
      this.budgetService.plusMoneyToABudget(id, value, budgetName, this.budget.currency);
    }
  }

  minusMoney(value: number, id: string): void {
    this.budgetService.minusMoneyToABudget(id, value);
  }

  deleteBudget(id: string) {
      Swal.fire({
        title: 'Вы уверены?',
        text: "Вы не сможете вернуть счет обратно!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#5bc0de',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Удалить',
        cancelButtonText:
          'Отменить операцию'
      })
      .then((result) => {
        if (result.value) {
          this.budgetService.deleteBudget(id)
          this.alertService.toast('Счет был успешно удален')
        }
      });
    }

    // hren() {
    //   console.log('hrehre')
    // }

    // open(content) {
    //   this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
    //     this.closeResult = `Closed with: ${result}`;
    //   }, (reason) => {
    //     this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    //   });
    // }
  
    // private getDismissReason(reason: any): string {
    //   if (reason === ModalDismissReasons.ESC) {
    //     return 'by pressing ESC';
    //   } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
    //     return 'by clicking on a backdrop';
    //   } else {
    //     return  `with: ${reason}`;
    //   }
    // }
  }


    


  // plusMoney(value: number, id: number): void {
  //   this.obj1[id].money += Number(value);
  //   this.obj2 = [...this.obj2, {date: new Date(), money: Number(value)}];
  // }

  // minusMoney(value: number, id: number): void {
  //   this.obj1[id].money -= Number(value);
  //   this.obj2 = [...this.obj2, {date: new Date(), money: Number(value)}];    
  // }
