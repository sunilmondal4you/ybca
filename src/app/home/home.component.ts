import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import _lodash from 'lodash';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  giftCards = [
    {'id':1, 'name':'Mr Rajesh', 'mobile':'11111111', 'CardNumber':'1234567812345678', 'status':'Active', 'expDate':'09/20'},
    {'id':2, 'name':'Mr Sunil', 'mobile':'11111111', 'CardNumber':'1234567812345678', 'status':'Bocked', 'expDate':'09/20'},
    {'id':3, 'name':'Mr Anirudha', 'mobile':'11111111', 'CardNumber':'1234567812345678', 'status':'', 'expDate':'09/20'},
    {'id':4, 'name':'Mr Mayank Agrawal', 'mobile':'11111111', 'CardNumber':'1234567812345678', 'status':'Active', 'expDate':'09/20'},
    {'id':5, 'name':'Mr Rajesh', 'mobile':'11111111', 'CardNumber':'1234567812345678', 'status':'Active', 'expDate':'09/20'},
  ]
  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
    _lodash.forEach(this.giftCards, (item: any) => {
      if(item.CardNumber) item.CardNumber = item.CardNumber.replace(/(\d{4}(?!\s))/g, "$1 ")
    });
  }

  viewCardDetail(){
    this.router.navigate(['/card-detail']);
  }

}
