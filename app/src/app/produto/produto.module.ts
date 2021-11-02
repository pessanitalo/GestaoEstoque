import { ProdutoService } from './Services/produto.service';
import { ProdutoRoutingModule } from './produto.route';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ProdutoResolve } from './Services/produto.resolve';
import { ProdutoDetalheComponent } from './produto-detalhe/produto-detalhe.component';
import { NovoComponent } from './novo/novo.component';
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { EditarProdutoComponent } from './editar-produto/editar-produto.component';
import { DeletarProdutoComponent } from './deletar-produto/deletar-produto.component'


@NgModule({
  declarations: 
  [
    ListComponent,
    ProdutoDetalheComponent,
    NovoComponent,
    EditarProdutoComponent,
    DeletarProdutoComponent
  ],
  imports: [
    CommonModule,
    ProdutoRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),
    NgxMaskModule.forRoot(),
  ],
  providers:[
  ProdutoService,
  ProdutoResolve
  ]
})
export class ProdutoModule { }
