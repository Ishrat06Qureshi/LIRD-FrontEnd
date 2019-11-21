import { Component, OnInit } from '@angular/core';
import { ClientformModel } from "../models/clientForm.model";
import { FormGroup, FormBuilder, Validators } from "@angular/forms"


@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.css']
})
export class ClientFormComponent implements OnInit {
  client: ClientformModel = new ClientformModel()
  clientForm: FormGroup
  constructor(private fb: FormBuilder) { }
  //test block
  TestAbc:boolean =false;
  testClick( value ){
this.TestAbc =value
  }
  
//end test block
  ngOnInit() {

    this.clientForm = this.fb.group({
      clientName: [this.client.clientName, [Validators.required]],
      clientEmail: [this.client.clientEmail, [Validators.required, Validators.email]],
      formType: [this.client.formType, Validators.required],
      language:[this.client.language, Validators.required],
      noOfRepresentative:[this.client.noOfRepresentative, Validators.required],
      supervisor:[this.client.supervisor, Validators.required]
    })
    this.onChanges()
  }

  onChanges() {
    this.clientForm.get('formType').valueChanges
    .subscribe(formType => {
        if (formType === 'Quebec') {
            this.testClick( true )
        }
        else {
          this.testClick( false )
        }
    });
}
  onRegisterSubmit = () => {
      alert(this.client.clientName + " " + this.client.clientEmail + "" + 
      this.client.formType + this.client.language)
  }
}
