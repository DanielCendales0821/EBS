import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { BaseService } from './base.service';



@Injectable({
    providedIn: 'root'
})
export class UsuarioService extends BaseService {
    constructor(public readonly http: HttpClient) {
        super(http);
    }



    saveUser(data: any) {
        return this.post('prueba', data);
    }


}