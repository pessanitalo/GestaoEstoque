import { Produto } from './../Models/produto';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProdutoService } from '../Services/produto.service';

@Component({
  selector: 'app-novo',
  templateUrl: './novo.component.html',
  styleUrls: ['./novo.component.css']
})
export class NovoComponent implements OnInit {

  produto: Produto;
  produtoForm: FormGroup;


  constructor(
    private produtoService: ProdutoService,
    private fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {

    this.produtoForm = this.fb.group({
      cod: ['', [Validators.required]],
      nome: ['', [Validators.required]],
      descProd: ['', [Validators.required]],
      qtdMensal: ['', [Validators.required]],
      qtdAtual: ['', [Validators.required]],
      dataCad: ['', [Validators.required]],
    });
  }

  novoProduto() {
    this.produto = Object.assign({}, this.produto, this.produtoForm.value);
    this.produtoService.novoProduto(this.produto)
      .subscribe(sucesso => { this.processarSucesso(sucesso) },
        falha => { this.processarFalha(falha) }
      )
  }

  processarSucesso(response: any) {
    this.produtoForm.reset();
    let toast = this.toastr.success('produto criado', 'Sucesso!');
    if (toast) {
      toast.onHidden.subscribe(() => {
        this.router.navigate(['produto/listar-todos'])
      });
    }
  }

  processarFalha(fail: any) {
    this.toastr.error('Houve algum erro', 'Error!');
  }

  returnList() {
    this.router.navigate(['produto/listar-todos'])
  }

}
