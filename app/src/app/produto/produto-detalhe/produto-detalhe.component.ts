import { Produto } from './../Models/produto';
import { ProdutoService } from './../Services/produto.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';

@Component({
  selector: 'app-produto-detalhe',
  templateUrl: './produto-detalhe.component.html',
  styleUrls: ['./produto-detalhe.component.css']
})
export class ProdutoDetalheComponent implements OnInit {

  public produto: Produto;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.produto = this.route.snapshot.data['produto'];

  }

  ngOnInit(): void {
  }

  returnList() {
    this.router.navigate(['produto/listar-todos']);
  }

}
