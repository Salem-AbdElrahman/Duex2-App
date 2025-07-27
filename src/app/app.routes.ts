import { Routes } from '@angular/router';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { BlankLayoutComponent } from './layouts/blank-layout/blank-layout.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: '',
    component: BlankLayoutComponent,
    children: [
      {
        path: 'home',
        loadComponent: () =>
          import('./pages/home/home.component').then(m => m.HomeComponent),
        title: 'Home',
      },
      {
        path: 'cart',
        loadComponent: () =>
          import('./pages/cart/cart.component').then(m => m.CartComponent),
        title: 'Cart',
      },
      {
        path: 'products',
        loadComponent: () =>
          import('./pages/products/products.component').then(m => m.ProductsComponent),
        title: 'Products',
      },
        {
        path: 'details/:id',
        loadComponent: () =>
          import('./pages/details/details.component').then(m => m.DetailsComponent),
        title: 'details',
      },
      {
        path: '**',
        component: NotfoundComponent,
      },
    ],
  },
];
