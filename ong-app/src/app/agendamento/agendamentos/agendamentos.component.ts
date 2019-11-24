import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AgendamentoService } from 'src/app/services/agendamento/agendamento.service';

@Component({
  selector: 'app-agendamentos',
  templateUrl: './agendamentos.component.html',
  styleUrls: ['./agendamentos.component.scss']
})
export class AgendamentosComponent implements OnInit {

  obterServicos: Subscription;
  erros = false;
  mensagemErro: string;
  modelAgendamentos: any;

  constructor(
    private agendamentoService: AgendamentoService,
  ) { }

  ngOnInit() {
    this.buscarAgendamentos();
  }

  private buscarAgendamentos(): void {
    this.obterServicos = this.agendamentoService.buscarAgendamento().subscribe(
      (data: any) => {
        if (data.tipo != false && data.dados.agendamentos != null) {
          this.modelAgendamentos = data.dados.agendamentos;
         }
      },
      (error) => {
        this.erros = true;
        this.mensagemErro = 'Ocorreu um erro inesperado!';
      }
    );
  }
}
