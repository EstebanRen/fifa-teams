import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormTeamsComponent } from 'src/app/components/form-teams/form-teams.component';
import { PopUpMessageComponent } from 'src/app/components/pop-up-message/pop-up-message.component';
import { DataTeam, Team } from 'src/app/entities/model-teams';

@Component({
  selector: 'app-card-teams',
  templateUrl: './card-teams.component.html',
  styleUrls: ['./card-teams.component.css'],
})
export class CardTeamsComponent {
  @Input() teamsListData!: DataTeam;
  @Input() authenticated: boolean = false;
  @Output() deleteTeam: EventEmitter<any> = new EventEmitter();
  @Output() editTeam: EventEmitter<any> = new EventEmitter();

  teamSelected!: Team;
  constructor(private dialog: MatDialog
  ) { }

  onClickDeleteTeam() {
    const dialogRef = this.dialog.open(PopUpMessageComponent, {
      width: '50%',
      panelClass: 'modal-pricing-plans-page',
      data: {
        title: 'Eliminar Equipo',
        message: 'Querido usuario,' +
          'Ten en cuenta que una vez elimines el equipo, no habrá forma de dar marcha atrás. Por favor, considera esta acción con cuidado antes de proceder',
      }
    }).afterClosed().subscribe(res => {
      if (res == true) {
        this.deleteTeam.emit(this.teamSelected.id);
      }
    });
  }

  onClickSelectedTeam(team: Team) {
    this.teamSelected = team;
  }
  
  onClickEditTeam() {
    const dialogRef = this.dialog.open(FormTeamsComponent, {
      width: '50%',
      panelClass: 'modal-pricing-plans-page',
      data:this.teamSelected,
    }).afterClosed().subscribe(res => {
      if (res) {
        this.editTeam.emit(res);
      }
    });

  }
}

