import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GenerateCsr } from 'src/app/common/generate-csr';
import { CsrEnrollmentServiceService } from 'src/app/csr-enrollment-service.service';

@Component({
  selector: 'app-generate-csr-page',
  templateUrl: './generate-csr-page.component.html',
  styleUrls: ['./generate-csr-page.component.css']
})
export class GenerateCsrPageComponent implements OnInit {

  generateCsr : GenerateCsr = new GenerateCsr("","","","","","","",0,"");
  constructor(private service: CsrEnrollmentServiceService,
              private route: Router,
              private activeRoute : ActivatedRoute
              ) { }

  ngOnInit(): void {
    console.log("Hello")
  }

  onSubmit(): void{
    console.log(this.generateCsr)
    this.service.saveCert(this.generateCsr).subscribe(() =>{
      this.route.navigateByUrl("")
    })
  }
}
