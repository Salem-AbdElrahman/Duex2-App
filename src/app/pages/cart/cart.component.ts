import { Component, inject, OnInit } from '@angular/core';
import { CartService } from '../../core/services/cart/cart.service';
import { ProductsService } from '../../core/services/products/products.service';
import { IProducts } from '../../shared/interfaces/iproducts';



@Component({
  selector: 'app-cart',
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent implements OnInit {
private readonly cartService=inject(CartService);
private readonly productsService=inject(ProductsService);
productsInCart:any[]=[]
products:any |null = null;
productId:any=0;
quantity:number=0;
getCartData():void{
   this.cartService.getCartWithProducts().subscribe({
    next:(res)=>{
      console.log(`product1:${res.products}`);
      this.productsInCart=res.products;
      for (const item of this.productsInCart) {
 this. productId = item.productId;
  this. quantity = item.quantity;
 this.getAllCartData( this. productId)

  console.log('Product ID:', this.productId);
  console.log('Quantity:',this. quantity);
  console.log(`product:${this.products}`);

}

    },
    error:(err)=>{
console.log(err);

    }
   });
}

getAllCartData(id:string):any{
  return this.productsService.getSpecificProducts(id).subscribe({
next:(res)=>{
  this.products=res;
  console.log('res1:' + JSON.stringify(res));
},
error:(err)=>{
  console.log(err);

}
  })
}


  ngOnInit(): void {
this.getCartData();
  }
}
