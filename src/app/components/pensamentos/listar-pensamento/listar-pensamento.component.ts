import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';
import { PensamentoService } from '../pensamento.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent implements OnInit {

  listaPensamento: Pensamento[] = [];
  listaFavoritos: Pensamento[] = [];
  paginaAtual: number = 1;
  temMaisPensamentos: boolean = true;
  favoritos: boolean = false;
  filtro: string = "";

  constructor(
    private service: PensamentoService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.service.listar(this.paginaAtual, this.filtro, this.favoritos).subscribe((listaPensamentos) => {
      this.listaPensamento = listaPensamentos;
    });
  }

  recarregarComponente() {
    //location.reload();

    this.router.routeReuseStrategy.shouldReuseRoute = () => false
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([this.router.url]);
  }

  carregarMaisPensamentos() {
    this.service.listar(++this.paginaAtual, this.filtro, this.favoritos).subscribe((listaPensamentos) => {
      this.listaPensamento.push(...listaPensamentos);
      if(!listaPensamentos.length) {
        this.temMaisPensamentos = false;
      }
    });
  }

  pesquisarPensamentos() {
    this.paginaAtual = 1;
    this.temMaisPensamentos = true;

    this.service.listar(this.paginaAtual, this.filtro, this.favoritos).subscribe((listaPensamentos) => {
      this.listaPensamento = listaPensamentos;
    })
  }

  listarFavoritos() {
    this.paginaAtual = 1;
    this.temMaisPensamentos = true;
    this.favoritos = true;

    this.service.listar(this.paginaAtual, this.filtro, true).subscribe((listaFavoritos) => {
      this.listaPensamento = listaFavoritos;
      this.listaFavoritos = listaFavoritos;
    })
  }

}
