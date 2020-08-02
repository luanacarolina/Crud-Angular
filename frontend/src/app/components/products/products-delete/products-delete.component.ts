import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'crud-products-delete',
  templateUrl: './products-delete.component.html',
  styleUrls: ['./products-delete.component.css']
})
export class ProductsDeleteComponent implements OnInit {
  product:Product
  constructor(private productService:ProductService,private route:ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void {
    const id =+ this.route.snapshot.paramMap.get('id');
    this.productService.readById(id).subscribe(product=>{
      this.product=product
    })
  }

  
  deleteProduct():void{
  this.productService.delete(this.product.id).subscribe(()=>{
    this.productService.showMessage('Produto excluido com sucesso')
    this.router.navigate(['/products'])
  })
  }
  cancel():void{
    this.router.navigate(['/products'])
  }


}
