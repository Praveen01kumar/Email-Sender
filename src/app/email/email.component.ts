import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {


  constructor(private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  data = {
    to: "",
    subject: "",
    message: ""
  }


  submitTheForm() {
    let val = localStorage.setItem("form", JSON.stringify(this.data));
    console.log(val);
  }
  SnackBar() {
    this._snackBar.open('Message Sent', 'Cancel');
  }

}




