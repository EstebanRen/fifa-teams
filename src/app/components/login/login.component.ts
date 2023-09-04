import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  Form: FormGroup;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    protected dialogRef: MatDialogRef<LoginComponent>) {

    this.Form = new FormGroup({
      user: new FormControl("", [Validators.required]),
      password: new FormControl("", [Validators.required]),
    });
  }

  close() {
    this.dialogRef.close(true);
  }
  onClickLogin(){
    this.dialogRef.close(this.Form.value)
  }
}
