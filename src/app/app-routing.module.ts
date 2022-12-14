import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  { path: 'products', loadChildren: () => import('./pages/products/products.module').then(m => m.ProductsModule) },

  
  { path : '**' , redirectTo: '', pathMatch: 'full'}//esta ruta siempre vuelve al home,siempre colecarla al final del conjunto de rutas

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
