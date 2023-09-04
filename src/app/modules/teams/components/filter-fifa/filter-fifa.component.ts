import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { FormTeamsComponent } from 'src/app/components/form-teams/form-teams.component';
import { LoginComponent } from 'src/app/components/login/login.component';

@Component({
  selector: 'app-filter-fifa',
  templateUrl: './filter-fifa.component.html',
  styleUrls: ['./filter-fifa.component.css']
})
export class FilterFifaComponent {
  @Output() formLogin: EventEmitter<any> = new EventEmitter();
  @Output() formCreateTeam: EventEmitter<any> = new EventEmitter();
  @Output() logout: EventEmitter<any> = new EventEmitter();
  @Output() searchID: EventEmitter<any> = new EventEmitter();
  @Output() searchAllTeams: EventEmitter<any> = new EventEmitter();
  @Output() searchDate: EventEmitter<any> = new EventEmitter();
  @Input() authenticated : boolean=false;
  searchForm: FormGroup;
  range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });

  constructor(
    private dialog: MatDialog,
    private fb: FormBuilder
  ) { 
    this.searchForm = this.fb.group({
      id: ['']
    });
  }

  onClickLogin() {
    const dialogRef = this.dialog.open(LoginComponent, {
      width: '50%',
      panelClass: 'modal-pricing-plans-page',
    }).afterClosed().subscribe(res => {
      if (res) {
        this.formLogin.emit(res);
      }
    });
  }
  onClickLogout(){
    this.logout.emit(false);
  }
  onClickCreateTeam(){
    const dialogRef = this.dialog.open(FormTeamsComponent, {
      width: '50%',
      panelClass: 'modal-pricing-plans-page',
    }).afterClosed().subscribe(res => {
      if (res) {
        this.formCreateTeam.emit(res);
      }
    });
  }
  onClickSearchId(){
    this.searchID.emit(this.searchForm.value)
  }
  onClickSearchDate(){
    this.searchDate.emit(this.range.value)
  }
  
  onInputChange() {
    const idControl = this.searchForm.get('id');
    if (idControl?.value == null) {
      this.searchAllTeams.emit();
    }
  }
  onClickClearFilters(){
    this.searchAllTeams.emit();
  }
  resetDataFilters(){
    this.range.patchValue({
      start: null,
      end: null
    });
    this.searchForm.patchValue({
      id: ''
    });
  }
}
