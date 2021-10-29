import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { Produto } from '../Models/produto';

@Component({
  selector: 'app-editar-produto',
  templateUrl: './editar-produto.component.html',
  styleUrls: ['./editar-produto.component.css']
})
export class EditarProdutoComponent implements OnInit {

  public produto: Produto;
  
  constructor(private route: ActivatedRoute) { this.produto = this.route.snapshot.data['produto']; }

  ngOnInit(): void {
  }

}
