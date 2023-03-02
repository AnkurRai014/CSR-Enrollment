import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { GenerateCsr } from './common/generate-csr';

@Injectable({
  providedIn: 'root'
})
export class CsrEnrollmentServiceService {

  generateCsr : GenerateCsr;

  private generateCsrUrl = "http://127.0.0.1:8000/generatecsr/";
  private getCertUrl = "http://127.0.0.1:8000/getcert/";

  constructor(private httpclient : HttpClient, private route: Router) { }

  saveCert(generateCsr : GenerateCsr){
    console.log(generateCsr)
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'auth-token',
        'Access-Control-Allow-origin': '*'
      })
    };
    return this.httpclient.post<GenerateCsr>(this.generateCsrUrl,generateCsr,httpOptions);
  }
}
