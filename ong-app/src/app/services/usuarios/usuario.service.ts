import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { LocalStorageService } from '../local-storage.service';
import { environment } from 'src/environments/environment';

const urlApi = environment.apiUrl + 'usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(
    protected http: HttpClient,
    private localSotrageService: LocalStorageService
  ) { }
  
  buscarUsuarios(): Observable<any> {
    return this.http.get<any>(urlApi, this.createHeader())
  }

  cadastrarUsuario(dadosUsuario: any): Observable<any> {
    return this.http.post<any>(urlApi, dadosUsuario, this.createHeader());
  }

  createHeader() {

    let headers = new HttpHeaders().set('Authorization', 'Bearer ' + JSON.parse(this.localSotrageService.get('userToken')));
    let options = { headers: headers };

    return options; 
  }
}
