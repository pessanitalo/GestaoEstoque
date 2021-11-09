import { Produto } from './../Models/produto';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CurrencyUtils } from 'src/app/utils/currency-utils';
import { ProdutoService } from '../Services/produto.service';

@Component({
  selector: 'app-editar-produto',
  templateUrl: './editar-produto.component.html',
  styleUrls: ['./editar-produto.component.css']
})
export class EditarProdutoComponent implements OnInit {

  public qtdAtual: number;
  public produto: Produto;

  constructor(
    private produtoService: ProdutoService,
    private route: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router,
  ) { this.produto = this.route.snapshot.data['produto']; }

  ngOnInit(): void {
  }

  editarValor() {
    this.produtoService.updateQuantidade(this.produto.id, this.qtdAtual)
      .subscribe(sucesso => { this.processarSucesso(sucesso) });
    (falha) => { this.processarFalha(falha) };
  }

  processarSucesso(response: any) {
    let toast = this.toastr.success('produto editado', 'Sucesso!');
    if (toast) {
      toast.onHidden.subscribe(() => {
        this.router.navigate(['produto/listar-todos'])
      });
    }
  }

  processarFalha(fail: any) {
    this.toastr.error('Houve algum erro', 'Error!');
  }

}
