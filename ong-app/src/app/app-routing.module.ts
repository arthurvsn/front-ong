import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppLayoutComponent } from './layouts/app-layout/app-layout.component';
import { HomeGuard } from './services/auth/home.guard';

import { HomeComponent } from './home/home.component';
import { CadastroServicoComponent } from './servicos/cadastro-servico/cadastro-servico.component';
import { EditarServicoComponent } from './servicos/editar-servico/editar-servico.component';
import { AgendamentosComponent } from './agendamento/agendamentos/agendamentos.component';
import { AdcionarAgendamentosComponent } from './agendamento/adcionar-agendamentos/adcionar-agendamentos.component';
import { UsuarioComponent } from './usuarios/usuario/usuario.component';

import { ServicosComponent } from './servicos/servicos/servicos.component';
import { CadastroComponent } from './usuarios/cadastro/cadastro.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: '',
    component: AppLayoutComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full', canActivate: [HomeGuard] },
      { path: 'home', component: HomeComponent, canActivate: [HomeGuard] },
      { path: 'agendamentos', component: AgendamentosComponent, canActivate: [HomeGuard] },
      { path: 'agendamentos/adiconar', component: AdcionarAgendamentosComponent, canActivate: [HomeGuard] },
      { path: 'servicos', component: ServicosComponent, canActivate: [HomeGuard]},
      { path: 'servicos/adicionar', component: CadastroServicoComponent, canActivate: [HomeGuard]},
      { path: 'servicos/editar/:id', component: EditarServicoComponent, canActivate: [HomeGuard]},
      { path: 'usuarios', component: UsuarioComponent, canActivate: [HomeGuard]},
      { path: 'usuarios/adicionar', component: CadastroComponent, canActivate: [HomeGuard]},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
