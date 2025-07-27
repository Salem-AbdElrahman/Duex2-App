import { Component, inject } from '@angular/core';
import { IProducts } from '../../shared/interfaces/iproducts';
import { CartService } from '../../core/services/cart/cart.service';
import { ProductsService } from '../../core/services/products/products.service';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from '../../core/pipes/search.pipe';
import { SortPipe } from '../../core/pipes/sort.pipe';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-products',
  imports: [FormsModule,SearchPipe,SortPipe,RouterLink],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
private readonly productsService=inject(ProductsService)
private readonly cartService=inject(CartService)
products:IProducts[] =[];
text:string=' ';
productId:any=0;
sortOption:string='';
ngOnInit(): void {
this.getProducts();

}
getProducts(){
    this.productsService.getAllProducts().subscribe({
    next:(res)=>{
      console.log(res);
this.products=res;
this.productId=res.id;
    },
    error:(err)=>{
      console.log(err);

    }
  })
}

AddToCart(id:number,products:any[]):void{
this.cartService.addProductToCart(id,products).subscribe({
  next:(res)=>{
    console.log(res);

  },
  error:(err)=>{
    console.log(err);

  }
})
}
}
