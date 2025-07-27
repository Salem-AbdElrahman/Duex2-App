import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../core/services/products/products.service';
import { IProducts } from '../../shared/interfaces/iproducts';

@Component({
  selector: 'app-details',
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent implements OnInit {
  private readonly activatedRoute=inject(ActivatedRoute);
  private readonly productsService=inject(ProductsService);
  detailsProduct:IProducts | null= null;
ngOnInit(): void {
  this.activatedRoute.paramMap.subscribe({
    next:(p)=>{
let idProduct=p.get('id')

     //logic Api --> call Api Specific=>getSpecificProducts
this.productsService.getSpecificProducts(idProduct).subscribe({
  next:(res)=>{
console.log(res);
this.detailsProduct=res;
  },
  error:(err)=>{
console.log(err);

  }

})


    }
  })
}
}
