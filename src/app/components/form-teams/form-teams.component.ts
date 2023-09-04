import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Team } from 'src/app/entities/model-teams';

@Component({
  selector: 'app-form-teams',
  templateUrl: './form-teams.component.html',
  styleUrls: ['./form-teams.component.css']
})
export class FormTeamsComponent {
  Form: FormGroup;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
    protected dialogRef: MatDialogRef<FormTeamsComponent>) {

    this.Form = new FormGroup({
      name: new FormControl("", [Validators.required]),
      stadium: new FormControl("", [Validators.required]),
      website: new FormControl("", [Validators.required,Validators.pattern('https?://.+')]),
      nationality: new FormControl("", [Validators.required]),
      foundationYear: new FormControl("", [Validators.required]),
      coach: new FormControl("", [Validators.required]),
      capacity: new FormControl("", [Validators.required, Validators.pattern('^[0-9]+$')]),
      value: new FormControl("", [Validators.required, Validators.pattern('^[0-9]+$')]),
    });

  }
  ngOnInit(): void {
    this.initInfo();
  }
  initInfo(){
    if(this.data!=undefined){
    this.Form.patchValue({
        name: this.data.nombre,
        stadium: this.data.estadio,
        website: this.data.sitioWeb,
        nationality: this.data.nacionalidad,
        foundationYear: this.formatDateToYearMonthDay(this.data.fundacion),
        coach: this.data.entrenador,
        capacity: this.data.capacidad,
        value: this.data.valor
      });
    }
  }
  formatDateToYearMonthDay(isoDate:string) {
    const date = new Date(isoDate);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); 
    const day = String(date.getDate()).padStart(2, '0'); 
    return `${year}-${month}-${day}`;
  }
  onClickCreateTeam(){
    let dataTeam = this.formatTeam();
    this.dialogRef.close(dataTeam);
  }

  onClickEditateTeam(){
    let dataTeam = this.formatTeam(this.data.id);
    this.dialogRef.close(dataTeam);
  }
  formatTeam(id:number=0){
    let dataTeam: Team = {
      id:id,
      nombre:this.Form.get('name')?.value,
      estadio:this.Form.get('stadium')?.value,
      sitioWeb:this.Form.get('website')?.value,
      nacionalidad:this.Form.get('nationality')?.value,
      fundacion:this.Form.get('foundationYear')?.value,
      entrenador:this.Form.get('coach')?.value,
      capacidad:this.Form.get('capacity')?.value,
      valor:this.Form.get('value')?.value,
    }
    return dataTeam
  }
}
