import { ServicosService } from './services/servicos/servicos.service';
import { LocalStorageService } from './services/local-storage.service';
import { LoginService } from './services/login/login.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ServicosComponent } from './servicos/servicos/servicos.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomeComponent } from './home/home.component';
import { AppLayoutComponent } from './layouts/app-layout/app-layout.component';
import { HeaderComponent } from './header/header.component';
import { CadastroServicoComponent } from './servicos/cadastro-servico/cadastro-servico.component';
import { EditarServicoComponent } from './servicos/editar-servico/editar-servico.component';
import { AgendamentosComponent } from './agendamento/agendamentos/agendamentos.component';
import { AdcionarAgendamentosComponent } from './agendamento/adcionar-agendamentos/adcionar-agendamentos.component';
import { UsuarioComponent } from './usuarios/usuario/usuario.component';
import { CadastroComponent } from './usuarios/cadastro/cadastro.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ServicosComponent,
    SidebarComponent,
    HomeComponent,
    AppLayoutComponent,
    HeaderComponent,
    CadastroServicoComponent,
    EditarServicoComponent,
    AgendamentosComponent,
    AdcionarAgendamentosComponent,
    UsuarioComponent,
    CadastroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [LoginService, LocalStorageService, ServicosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
