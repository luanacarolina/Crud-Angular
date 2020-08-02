import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product.model';

@Component({
  selector: 'crud-products-read',
  templateUrl: './products-read.component.html',
  styleUrls: ['./products-read.component.css']
})
export class ProductsReadComponent implements OnInit {
  products:Product[]
  displayedColumns=['id','name','price','action']

  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    this.productService.read().subscribe(products=>{
      this.products=products
      console.log(products)
    })
  }
 
}
