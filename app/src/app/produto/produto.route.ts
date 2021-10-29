import { EditarProdutoComponent } from './editar-produto/editar-produto.component';
import { NovoComponent } from './novo/novo.component';
import { ProdutoDetalheComponent } from './produto-detalhe/produto-detalhe.component';
import { ListComponent } from './list/list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProdutoResolve } from './Services/produto.resolve';


const routes: Routes = [
  { path: 'listar-todos', component: ListComponent },
  
    { path: 'detalhe/:id', component: ProdutoDetalheComponent,
      resolve: { produto: ProdutoResolve}
  },
  { path: 'new', component: NovoComponent },
  { path: 'editar/:id', component: EditarProdutoComponent,resolve: { produto: ProdutoResolve} },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdutoRoutingModule { }