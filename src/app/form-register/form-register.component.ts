import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.css']
})
export class FormRegisterComponent implements OnInit {
  genero:any = [{value:'m',label:'masculino'},{value:'m',label:'masculino'}]
  constructor() { }

  ngOnInit(){
  }


}
