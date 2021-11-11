import { ProdutoService } from './../Services/produto.service';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Produto } from '../Models/produto';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-deletar-produto',
  templateUrl: './deletar-produto.component.html',
  styleUrls: ['./deletar-produto.component.css']
})
export class DeletarProdutoComponent implements OnInit {

  modalRef?: BsModalRef;

  public produto: Produto;

  constructor(
    private produtoService: ProdutoService,
    private route: ActivatedRoute,
    private modalService: BsModalService,
    private toastr: ToastrService,
    private router: Router
  ) { this.produto = this.route.snapshot.data['produto']; }

  ngOnInit(): void {
  }

  removerItem() {
    this.produtoService.removeItem(this.produto.id)
      .subscribe(sucesso => { this.processarSucesso(sucesso) });
    (falha) => { this.processarFalha(falha) };
  }

  processarSucesso(response: any) {
    let toast = this.toastr.success('Produto Removido com Sucesso', 'Sucesso!');
    if (toast) {
      toast.onHidden.subscribe(() => {
        this.router.navigate(['produto/listar-todos'])
      });
    }
  }

  processarFalha(fail: any) {
    this.toastr.error('Houve algum erro', 'Error!');
  }
  
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  returnList() {
    this.router.navigate(['produto/listar-todos'])
  }
}
