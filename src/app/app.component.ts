import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { CadastroInterface } from './Interfaces/cadastro';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  /* Variavel para o titulo da pagina */
  tituloDaPagina = 'Agenda'

  /* Variavel que recebe um array com os cadastros do tipo criado */
  cadastros: Array<CadastroInterface> = [{
      nome: 'Lucas Franchi',
      ru: 3638107,
      nomeDoCurso: 'Engenharia de Software',
      dataAniversario: this.dateToString(new Date('02/12/2003'))
    },
    {
      nome: 'José',
      ru: 3638102,
      nomeDoCurso: 'Matemática',
      dataAniversario: this.dateToString(new Date('10/18/2004'))
    },
    {
      nome: 'Antonio',
      ru: 3638523,
      nomeDoCurso: 'Engenharia Civil',
      dataAniversario: this.dateToString(new Date('07/13/2002'))
    },
    {
      nome: 'Rebeca',
      ru: 3638643,
      nomeDoCurso: 'Enfermagem',
      dataAniversario: this.dateToString(new Date('11/24/2004'))
    },
    {
      nome: 'Carla',
      ru: 3638967,
      nomeDoCurso: 'Arquitetura',
      dataAniversario: this.dateToString(new Date('02/23/2000'))
    }
  ]

  /* Declaracao no construtor para realizar a dormatacao da data */
  constructor(private datePipe: DatePipe) {}

  /* Metodo criado para devolver uma string formatada da data para a variavel */
  dateToString(data: Date): string {
    const dataParaString = this.datePipe.transform(data, 'dd/MM/yyyy');
    return dataParaString
  }

}


