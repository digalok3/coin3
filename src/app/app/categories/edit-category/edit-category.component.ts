import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CategoryModel } from './../a-category/a-category.model';
import { CategoryService } from './../category.service';
import { NgForm } from '@angular/forms';
import { AlertService } from './../../commonServices/alert-service.service';
import { imagesArray } from './../../commonServices/images';
import Swal from 'sweetalert2';
import { Location } from '@angular/common';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent implements OnInit {
  @ViewChild('f') editCategoryForm: NgForm;
  id: string;
  category: any
  imagePath = [];
  firstSlice = [];
  secondSlice = [];
  thirdSlice = [];
  page = 1;
  toggledItem = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private categoryService: CategoryService,
    private alertService:  AlertService,
    private _location: Location
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];

    this.categoryService.getCategories().subscribe(data=> {
        data.filter((val, i)=> {
        if (data[i].id===this.id) {
         this.category = data[i]
         this.toggledItem = this.category.photoURL
        if (!this.category.moneyLimit) {
          this.category.moneyLimit = 0
        }
        }
      })
    })
    this.imagePath = imagesArray(25);
    this.firstSlice = this.imagePath.slice(0,9)
    this.secondSlice = this.imagePath.slice(10,19)
    this.thirdSlice = this.imagePath.slice(20,26)

  }

  editCategory() {
    if (this.category.photoURL!=this.toggledItem) {
      this.categoryService.updateCategory(this.editCategoryForm.value, this.id, this.toggledItem)
      .then(()=> {
        this.alertService.toast('The category has been changed')
        this.router.navigateByUrl('/')
      })
    }
    else {
      this.categoryService.updateCategory(this.editCategoryForm.value, this.id, this.category.photoURL)
      .then(()=>{
        this.alertService.toast('The category has been changed!')
        this.router.navigateByUrl('/categories')
      })
      
    }
    
    
  }

  onImageClick(image) {
    console.log(image)
    this.toggledItem = image;
  }

  goBack() {
    this._location.back();
  }


 
}

