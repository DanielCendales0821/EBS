import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';



@Injectable({
    providedIn: 'root'
})
export class BaseService {
    public header: any;
    public path: string;
    constructor(
        public readonly http: HttpClient,
    ) {
        this.path = environment.BaseURL;
        this.initializeHeader();
    }

    public initializeHeader() {
        return this.header = new HttpHeaders({
            'Content-Type': 'application/json',
            'x-token': this.token()
        });
    }

    public token(): string {
        return 'Beares asa'; 
    }



    get(url: string): any {
        return this.http.get(this.path + url, { headers: this.initializeHeader() });
    }

    getById(url: string, id:any): any {
        return this.http.get(this.path + url + id, { headers: this.initializeHeader() });
    }


    post(url: string, data: any) {
        const params = data;
        return this.http.post(this.path + url, params, { headers: this.initializeHeader() });
    }

    update(url: string, id:any, data: any): any {
        const params = (data);
        return this.http.put(this.path + url + id, params, { headers: this.initializeHeader() });
    }
    put(url: string, data: any): any {
        const params = (data);
        return this.http.put(this.path + url, params, { headers: this.initializeHeader() });
    }

    delete(url: string, id: any) {
        return this.http.delete(this.path + url + id, { headers: this.initializeHeader() });
    }

    loginn(url: string, data: any) {
        const params = data;
        return this.http.post(this.path + url, params, {
            headers: new HttpHeaders({ 'Content-Type': 'application/json', 'x-token': '' })
        });
    }


}