import { Component, OnInit } from '@angular/core';
import {ProductService} from './../product.service'
import { Router } from '@angular/router';
import { Product } from '../product.model';

@Component({
  selector: 'crud-products-create',
  templateUrl: './products-create.component.html',
  styleUrls: ['./products-create.component.css']
})
export class ProductsCreateComponent implements OnInit {

  product:Product={
    name:'',
    price:null
  }
   
  constructor(private productService:ProductService,private route:Router) { }

  ngOnInit(): void {
    
  }
  createProduct():void{
    this.productService.create(this.product).subscribe(()=>{
      this.productService.showMessage('Produto Criado');
      this.route.navigate(['/products'])
    })
  }
  cancel():void{
    this.route.navigate(['/products'])
  }

}
