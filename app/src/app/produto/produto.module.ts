import { ProdutoService } from './Services/produto.service';
import { ProdutoRoutingModule } from './produto.route';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: 
  [
    ListComponent
  ],
  imports: [
    CommonModule,
    ProdutoRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers:[
  ProdutoService
  ]
})
export class ProdutoModule { }
