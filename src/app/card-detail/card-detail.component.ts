import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.scss']
})
export class CardDetailComponent implements OnInit {
  giftCards = {
    "user_name" : "Sunil Mondal",
    "card_number": "512345000002222",
    "kit_number": "00000123789",
    "expiry_date": "10/21",
    "status" : "ALLOCATED",
    "card_type" : "PHYSICAL",
    "networkTypeList" : "RUPAY",
    "mobile" : "8779529714",
    "Id" : 1,
    "balance" :"444",
    "transactions":[
      {"transaction_date":"2019-09-25T12:46:20.000+05:30","amount":"10.0","transaction_reference_number":"20190925001","transaction_type":"Debited","message":"Debited Rs. 10.0 on Test"},
      {"transaction_date":"2019-09-23T13:40:45.000+05:30","amount":"50.0","transaction_reference_number":"2019092397253","transaction_type":"Credited","message":"GiftCard issued for Rs.50.0"},
      {"transaction_date":"2019-09-25T12:46:20.000+05:30","amount":"10.0","transaction_reference_number":"20190925001","transaction_type":"Debited","message":"Debited Rs. 10.0 on Test"},
      {"transaction_date":"2019-09-23T13:40:45.000+05:30","amount":"50.0","transaction_reference_number":"2019092397253","transaction_type":"Credited","message":"GiftCard issued for Rs.50.0"},
      {"transaction_date":"2019-09-25T12:46:20.000+05:30","amount":"10.0","transaction_reference_number":"20190925001","transaction_type":"Debited","message":"Debited Rs. 10.0 on Test"},
      {"transaction_date":"2019-09-23T13:40:45.000+05:30","amount":"50.0","transaction_reference_number":"2019092397253","transaction_type":"Credited","message":"GiftCard issued for Rs.50.0"},
    ]
   };
  constructor() { }

  ngOnInit(): void {
  }

  previousState() {
    window.history.back();
  };

}
