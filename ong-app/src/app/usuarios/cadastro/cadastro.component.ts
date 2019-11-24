import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';

import { UsuarioService } from 'src/app/services/usuarios/usuario.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {

  checkoutForm;
  erros = false;
  mensagemErro: string;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private usuarioService: UsuarioService,
  ) { 
    this.checkoutForm = this.formBuilder.group({
      nome: '',
      cpf: '',
      login: '',
      senha: '',
    });
  }

  ngOnInit() {
  }

  onSubmit(usuarioData) {
    console.log(usuarioData);

    this.usuarioService.cadastrarUsuario(usuarioData).subscribe(
      (data: any) => {
        if (data.tipo != false && data.dados.usuario != null) {
          this.router.navigate(['usuarios']);
         }
      },
      (error) => {
        this.erros = true;
        this.mensagemErro = 'Ocorreu um erro inesperado!';
      }
    );
  }
}
