import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class CustomersService {
  
  urlServer: string = 'http://localhost:8098/customer/';

  constructor(private _httpClient:HttpClient) { 
    console.log('service OK')
  }

  getCustomer(){
    const headers = new HttpHeaders();
    return this._httpClient.get(this.urlServer+'?page=0&size=5', { headers });
  }

  save(newCustomer){
    const headers = new HttpHeaders({});
    console.log("salvar customer");
    console.log(newCustomer);
    return this._httpClient.post(this.urlServer, newCustomer ,{ headers });
  }
}
