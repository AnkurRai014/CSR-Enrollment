import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { GetCert } from 'src/app/common/get-cert';
import { CsrEnrollmentServiceService } from 'src/app/csr-enrollment-service.service';

@Component({
  selector: 'app-get-cert-page',
  templateUrl: './get-cert-page.component.html',
  styleUrls: ['./get-cert-page.component.css']
})
export class GetCertPageComponent implements OnInit {

  getCert : GetCert = new GetCert("","","","");

  constructor(private service: CsrEnrollmentServiceService,
              private route: Router,
              private activeRoute : ActivatedRoute
              ) { }

  ngOnInit(): void {
    console.log("Hello");
  }

  onSubmit(): void{
    console.log(this.getCert);
    this.route.navigateByUrl('getcert');
  }
}
