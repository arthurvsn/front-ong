import { Injectable } from '@angular/core';
import { LocalStorageService } from '../local-storage.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from 'src/environments/environment';

const urlServicos = environment.apiUrl + 'agendamento';

@Injectable({
  providedIn: 'root'
})
export class AgendamentoService {

  constructor(
    protected http: HttpClient,
    private localSotrageService: LocalStorageService
  ) { }

  cadastrarAgendamento(body) {
    return this.http.post<any>(urlServicos, body, this.createHeader());
  }

  private createHeader() {

    let headers = new HttpHeaders().set('Authorization', 'Bearer ' + JSON.parse(this.localSotrageService.get('userToken')));
    let options = { headers: headers };

    return options; 
  }
}