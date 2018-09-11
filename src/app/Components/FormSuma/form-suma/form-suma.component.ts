import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../Services/User/user.service';

@Component({
  selector: 'app-form-suma',
  templateUrl: './form-suma.component.html',
  styleUrls: ['./form-suma.component.css']
})
export class FormSumaComponent implements OnInit {

  users: [any];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getUserFromService();
  }


  sum(num1, num2) {
    return parseInt(num1, 0) + parseInt(num2, 0);
  }

  getUserFromService() {
    this.userService.getUser().subscribe(response => {
      this.users = response;
    });
  }


}
