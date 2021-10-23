import { ProdutoService } from './../Services/produto.service';
import { Component, OnInit } from '@angular/core';
import { Produto } from '../Models/produto';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public produtos: Produto[];
  errorMessage: string;

  constructor(private produto: ProdutoService) { }

  ngOnInit(): void {
    this.produto.listarProdutos()
    .subscribe(
      produto => this.produtos = produto,
      error => this.errorMessage);
    }

}
