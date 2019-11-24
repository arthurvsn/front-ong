import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { ServicosService } from '../../services/servicos/servicos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-servico',
  templateUrl: './cadastro-servico.component.html',
  styleUrls: ['./cadastro-servico.component.scss']
})
export class CadastroServicoComponent implements OnInit {

  checkoutForm;
  erros = false;
  mensagemErro: string;

  constructor(
    private servicosService: ServicosService,
    private formBuilder: FormBuilder,
    private router: Router,
    ) {
      this.checkoutForm = this.formBuilder.group({
        nome: '',
        descricao: ''
      });
     }

  ngOnInit() {
  }

  onSubmit(customerData) {

    this.servicosService.cadastrarServicos(customerData).subscribe(
      (data: any) => {
        if (data.tipo != false && data.dados.servicos != null) {
          this.router.navigate(['servicos']);
         }
      },
      (error) => {
        this.erros = true;
        this.mensagemErro = 'Ocorreu um erro inesperado!';
      }
    );

  }
}
