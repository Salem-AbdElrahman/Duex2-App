import { Component, inject, OnInit } from '@angular/core';
import { ProductsService } from '../../core/services/products/products.service';
import { IProducts } from '../../shared/interfaces/iproducts';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from '../../core/pipes/search.pipe';
import { SortPipe } from '../../core/pipes/sort.pipe';
import { CartService } from '../../core/services/cart/cart.service';






@Component({
  selector: 'app-home',
  imports: [CarouselModule,RouterLink,SearchPipe,FormsModule,SortPipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
private readonly productsService=inject(ProductsService)
private readonly cartService=inject(CartService)
products:IProducts[] =[];
text:string=' ';
sortOption:string='';
productId:any=0;
  customMainSlider: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    autoplay:true,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
   items:1,
    nav: true
  }


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
