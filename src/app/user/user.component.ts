import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  username = '';
  buttonStatus = false;

  constructor() { }

  ngOnInit(): void {
  }

  allowReset() {
    if (this.username == '') {
      return true
    }
  }

  onClickButton() {
    this.username = ''
  }

}
