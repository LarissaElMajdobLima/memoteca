import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';
import { PensamentoService } from '../pensamento.service';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent implements OnInit {

  listaPensamento: Pensamento[] = [];
  paginaAtual: number = 1;
  temMaisPensamentos: boolean = true;
  filtro: string = "";

  constructor(private service: PensamentoService) { }

  ngOnInit(): void {
    this.service.listar(this.paginaAtual, this.filtro).subscribe((listaPensamentos) => {
      this.listaPensamento = listaPensamentos;
    });
  }

  carregarMaisPensamentos() {
    this.service.listar(++this.paginaAtual, this.filtro).subscribe((listaPensamentos) => {
      this.listaPensamento.push(...listaPensamentos);
      if(!listaPensamentos.length) {
        this.temMaisPensamentos = false;
      }
    });
  }

  pesquisarPensamentos() {
    this.paginaAtual = 1;
    this.temMaisPensamentos = true;

    this.service.listar(this.paginaAtual, this.filtro).subscribe((listaPensamentos) => {
      this.listaPensamento = listaPensamentos;
    })
  }

}
