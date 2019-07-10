import { Component, OnInit, Input } from '@angular/core';
import { BudgetModel } from './a-budget.model';
import { BudgetService } from './../budget.service';
import { AlertService } from './../../commonServices/alert-service.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-a-budget',
  templateUrl: './a-budget.component.html',
  styleUrls: ['./a-budget.component.css']
})

export class ABudgetComponent implements OnInit {
  closeResult: any;

  @Input()
  budget: BudgetModel;

  @Input()
  isEdit: boolean;

  img: any;

  tempId: any;

  cardStyle: {};


  constructor(
    private budgetService: BudgetService,
    private alertService: AlertService,
    private router: Router
    ) {
      }

  ngOnInit() {
    this.img = new Image(10,10);
    this.img.src = 'assets/dollar2.png'
    this.cardStyle = {
      'card': true
    }

    
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
        text: 'Вы не сможете вернуть счет обратно!',
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

    dragStartHey(ev: any, id: string) {        
        this.tempId = id; 
        ev.dataTransfer.setData('text', id)      
        ev.dataTransfer.setDragImage(this.img, 0, 0) 
        if(this.tempId===id) {
          this.cardStyle = {
            'card': false,
            'card2': true
          }       
        }

    }


    heyDrop(ev: any, idTwo: string) {
      ev.preventDefault()
      if (idTwo !== this.tempId) {
        const  data = ev.dataTransfer.getData('text');
        this.budgetService.transferMoney.next({id: idTwo})
        this.router.navigate([`budget/transfer/${data}`])
        this.cardStyle ={
          'card': true
        }
      }
         }


      allowDrop(ev: any, id: string) {
        ev.preventDefault()
        if(this.tempId!==id) {
          this.cardStyle = {
            'card': false,
            'card3': true
          }   
          
        }   

        
    }

    dragLeaveHey (ev: any) {
      if(this.tempId!==this.budget.id) {
        this.cardStyle = {
          'card': true,
          'card3': false
        }
      }      
    
   }

    dragEnterHey (ev: any) {    

    }

    dragEndHey (ev:any) {      
      this.cardStyle = {
        'card': true
      }
      this.tempId = ''
    }

    cardClasses() {
      return this.cardStyle
    }


  }


