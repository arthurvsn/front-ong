import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { ServicosService } from 'src/app/services/servicos/servicos.service';

@Component({
  selector: 'app-editar-servico',
  templateUrl: './editar-servico.component.html',
  styleUrls: ['./editar-servico.component.scss']
})
export class EditarServicoComponent implements OnInit {

  servico: any;modelServicos: any;
  erros = false;
  mensagemErro: string;
  private routeSub: Subscription;

  constructor(
    private servicosService: ServicosService,
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.routeSub = this.route.params.subscribe(params => {
      this.buscarServico(params['id']);
    });
  }

  buscarServico(idServico) {
    this.servico = this.servicosService.buscarServico(idServico).subscribe(
      (data: any) => {
        if (data.tipo != false && data.dados.servicos != null) {
          this.modelServicos = data.dados.servico;
         }
      },
      (error) => {
        this.erros = true;
        this.mensagemErro = 'Ocorreu um erro inesperado!';
      }
    );
  }

  atualizar() {

  }

  deletar() {

  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }
}
