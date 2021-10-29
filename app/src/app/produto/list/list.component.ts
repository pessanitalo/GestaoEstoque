import { ProdutoService } from './../Services/produto.service';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { Produto } from '../Models/produto';

import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  modalRef?: BsModalRef;
  public produtos: Produto[];
  public produto: Produto;

  errorMessage: string;

  constructor(
    private produtoService: ProdutoService,
    private modalService: BsModalService,
    private route: ActivatedRoute,
    private toastr: ToastrService

  ) {}
     

  ngOnInit(): void {
    this.produtoService.listarProdutos()
    .subscribe(
      produto => this.produtos = produto,
      error => this.errorMessage);
    }

    openModal(template: TemplateRef<any>) {
      this.modalRef = this.modalService.show(template);
    }
}
