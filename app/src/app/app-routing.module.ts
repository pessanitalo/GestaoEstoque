import { HomeComponent } from './navegacao/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = 
[
    { path: 'home', component: HomeComponent },

  {
    path: 'produto',
    loadChildren: () => import('./produto/produto.module')
      .then(m => m.ProdutoModule)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
