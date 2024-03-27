import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent implements OnInit {

  listaPensamento = [
    {
      conteudo: 'Passo infos para o componente filho',
      autoria: 'Componente pai',
      modelo: 'modelo1'
    },
    {
      conteudo: 'Minha propriedade é decorada com @input',
      autoria: 'Componente filho',
      modelo: 'modelo2'
    },
    {
      conteudo: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem molestias ipsum sequi labore quisquam optio, magni consequatur asperiores tempore saepe reprehenderit repellat harum obcaecati dolorum voluptates quia nam sed illum.',
      autoria: 'Lorem ipsum',
      modelo: 'modelo3'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
