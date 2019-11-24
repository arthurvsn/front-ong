import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { UsuarioService } from 'src/app/services/usuarios/usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent implements OnInit {
  
  obterUsuarios: Subscription;
  modelUsuarios: any;
  erros = false ;
  mensagemErro: string;

  constructor(
    private usuarioService: UsuarioService,
  ) { }

  ngOnInit() {
    this.buscarUsuarios();
  }

  buscarUsuarios(): void {
    this.obterUsuarios = this.usuarioService.buscarUsuarios().subscribe(
      (data: any) => {
        if (data.tipo != false && data.dados.usuarios != null) {
          this.modelUsuarios = data.dados.usuarios;
        } else if (data.tipo === false) {
          this.erros = true;
          this.mensagemErro = data.mensagem;  
        }
      },
      (error) => {
        this.erros = true;
        this.mensagemErro = 'Ocorreu um erro inesperado!';
      }
    );
  }
}
