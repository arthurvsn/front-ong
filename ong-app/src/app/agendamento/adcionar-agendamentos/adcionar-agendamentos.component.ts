import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { ServicosService } from 'src/app/services/servicos/servicos.service';
import { AgendamentoService } from 'src/app/services/agendamento/agendamento.service';

@Component({
  selector: 'app-adcionar-agendamentos',
  templateUrl: './adcionar-agendamentos.component.html',
  styleUrls: ['./adcionar-agendamentos.component.scss']
})
export class AdcionarAgendamentosComponent implements OnInit {
  
  checkoutForm;
  obterServicos: Subscription;
  modelServicos: any;
  erros = false;
  mensagemErro: string;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private servicosService: ServicosService,
    private agendamentoService: AgendamentoService,
  ) {
    this.checkoutForm = this.formBuilder.group({
      data: '',
      hora: '',
      servico: '',
    });
   }

  ngOnInit() {
    this.buscarServicos();
  }
  
  private buscarServicos(): void {
    this.obterServicos = this.servicosService.buscarServicos().subscribe(
      (data: any) => {
        if (data.tipo != false && data.dados.servicos != null) {
          this.modelServicos = data.dados.servicos;
        }
      },
      (error) => {
        this.erros = true;
        this.mensagemErro = 'Ocorreu um erro inesperado!';
      }
    );
  }

  onSubmit(agendamento) {
    this.agendamentoService.cadastrarAgendamento(agendamento).subscribe(
      (data: any) => {
        if (data.tipo != false && data.dados.agendamentos != null) {
          this.router.navigate(['agendamentos']);
         }
      },
      (error) => {
        this.erros = true;
        this.mensagemErro = 'Ocorreu um erro inesperado!';
      }
    );
  }
}
