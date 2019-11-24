import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from "../../../environments/environment";
import { LocalStorageService } from '../local-storage.service';

// const urlServicos = 'http://www.mocky.io/v2/5cfe50e23200004f0045effc';
const urlServicos = environment.apiUrl + 'servico';

@Injectable({
  providedIn: 'root'
})

export class ServicosService {
  
  constructor(
    protected http: HttpClient,
    private router: Router,
    private localSotrageService: LocalStorageService
  ) { }

  buscarServicos(): Observable<any> {
    return this.http.get<any>(urlServicos, this.createHeader())
  }

  buscarServico(idServico): Observable<any> {
    return this.http.get<any>(urlServicos + '/' + idServico, this.createHeader())
  }

  cadastrarServicos(servicoRequest: any): Observable<any> {
    return this.http.post<any>(urlServicos, servicoRequest, this.createHeader());

    //return this.http.post<any>(urlServicosLocal + '/cadastrar-servico', servicoRequest);
  }

  createHeader() {

    let headers = new HttpHeaders().set('Authorization', 'Bearer ' + JSON.parse(this.localSotrageService.get('userToken')));
    let options = { headers: headers };

    return options; 
  }
}
