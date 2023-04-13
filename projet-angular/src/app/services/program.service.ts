import { Injectable } from '@angular/core';
import { Program } from '../program';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProgramService {

  programs!: Program[];

  constructor(private http: HttpClient) { }

  list() {
    return this.http.get(`${environment.apiUrl}/programs/list`);
  }

  create(data: Program) {
   /*  
    var header = this.getHeader();
    return this.http.post(`${environment.apiUrl}/programs/create`, data, header); */
    return this.http.post(`${environment.apiUrl}/programs/create`, data);
  }

  update(id: number, data: Program) {
    return this.http.put(`${environment.apiUrl}/programs/update/${id}`, data);
  }
  
  delete(id: number){
    return this.http.delete(`${environment.apiUrl}/programs/delete/${id}`);
  }

  getHeader(){
    return{
      headers: new HttpHeaders()
      .set('Authorization',  `Bearer ${localStorage.getItem('id_token')}`)
    }
  }

}
