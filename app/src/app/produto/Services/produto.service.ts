import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Produto } from "../Models/produto";

@Injectable()
export class ProdutoService{

    baseUrl = `${environment.mainUrlAPI}produto`;

    constructor(private http: HttpClient){}

    listarProdutos(): Observable<Produto[]>{
        return this.http.get
        <Produto[]>(this.baseUrl);

    }
   

}