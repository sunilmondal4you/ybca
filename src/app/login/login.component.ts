import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  cardForm: FormGroup;
  mobileForm: FormGroup;
  public cardTypeList = ['Virtual Card', 'Physical Card'];
  public mobileSecDisp = false;

  constructor(
    private router: Router,
    private formBuilder : FormBuilder,
  ) { }

  initializeForm(){
    this.cardForm = this.formBuilder.group({
      cardType: ['', Validators.required],
    });
    this.mobileForm = this.formBuilder.group({
      mobile: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.initializeForm();
  }

  next(){
    this.mobileSecDisp = true;
  }
  submit(){
    this.router.navigate(['/home']);
  }

}
