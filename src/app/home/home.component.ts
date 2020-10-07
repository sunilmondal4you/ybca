import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  giftCards = [
    {'id':1, 'name':'Mr Rajesh', 'mobile':'11111111', 'CardNumber':'1111111111111111', 'status':'Active', 'expDate':'09/20'},
    {'id':2, 'name':'Mr Sunil', 'mobile':'11111111', 'CardNumber':'1111111111111111', 'status':'Bocked', 'expDate':'09/20'},
    {'id':3, 'name':'Mr Anirudha', 'mobile':'11111111', 'CardNumber':'1111111111111111', 'status':'', 'expDate':'09/20'},
    {'id':4, 'name':'Mr Mayank Agrawal', 'mobile':'11111111', 'CardNumber':'1111111111111111', 'status':'Active', 'expDate':'09/20'},
    {'id':5, 'name':'Mr Rajesh', 'mobile':'11111111', 'CardNumber':'1111111111111111', 'status':'Active', 'expDate':'09/20'},
  ]
  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  viewCardDetail(){
    this.router.navigate(['/card-detail']);
  }

}
