import { Produto } from './../Models/produto';
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";


@Injectable()
export class ProdutoService{

    baseUrl = `${environment.mainUrlAPI}produto`;

    constructor(private http: HttpClient){}

    listarProdutos(): Observable<Produto[]>{
        return this.http.get<Produto[]>(this.baseUrl);
    }

    novoProduto(produto: Produto): Observable<Produto> {
        return this.http.post<Produto>(this.baseUrl,produto);
      }

    obterPorId(id: number): Observable<Produto> {
        return this.http.get<Produto>(`${this.baseUrl}/${id}`);
      }
}