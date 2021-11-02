import { Component, OnInit, TemplateRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Produto } from '../Models/produto';

@Component({
  selector: 'app-deletar-produto',
  templateUrl: './deletar-produto.component.html',
  styleUrls: ['./deletar-produto.component.css']
})
export class DeletarProdutoComponent implements OnInit {

  modalRef?: BsModalRef;
  public produto: Produto;
  
  constructor(
    private route: ActivatedRoute,
    private modalService: BsModalService,
    private router: Router
    ) { this.produto = this.route.snapshot.data['produto']; }

  ngOnInit(): void {
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
  
  returnList(){
    this.router.navigate(['produto/listar-todos'])
  }
}
