import { ProdutoService } from './produto.service';
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve } from "@angular/router";
import { Produto } from "../Models/produto";



@Injectable()
export class ProdutoResolve implements Resolve<Produto>{

    constructor(private produtoService: ProdutoService){}

    resolve(route: ActivatedRouteSnapshot){
        return this.produtoService.obterPorId(route.params['id']);
    }
}