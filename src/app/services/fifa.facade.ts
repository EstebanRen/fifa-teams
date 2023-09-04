import { Injectable } from '@angular/core';
import { DataTeam, Team } from '../entities/model-teams';
import { FifaListService } from './fifa-api.service';
import { FifaStateService } from './fifa-state.service';
import { LoginComponent } from '../components/login/login.component';
import { MatDialog } from '@angular/material/dialog';


@Injectable()
export class FifaFacadeService {
  teamsListData!: DataTeam;

  constructor(
    private fifaService: FifaListService,
    private fifabState: FifaStateService,
    private dialog: MatDialog
  ) {
    this.fifaService.getTeams().subscribe((response: DataTeam) => {
      this.mappingDataFromService(response);
      // this.error('')
    }, (error: any) => {

    });
  }

  getTeams() {
    this.fifaService.getTeams().subscribe((response: DataTeam) => {
      this.mappingDataFromService(response);
    })
  }
  mappingDataFromService(response: DataTeam): void {
    this.teamsListData = response;
    this.updateTeamData(this.teamsListData);
  }
  createTeam(dataTeam: any) {
    this.fifaService.createTeam(dataTeam).subscribe((response: any) => {
      this.getTeams();
    })
  }
  deleteTeam(id: any) {
    this.fifaService.deleteTeam(id).subscribe((response: any) => {
      this.getTeams();
    })
  }
  searchDate(date: any) {
    this.fifaService.getTeamsBetweenDates(this.formatDateToDayMonthYear(date.start), this.formatDateToDayMonthYear(date.end)).subscribe((response: [Team]) => {
      let teamData: DataTeam = {
        content: response
      };
      this.updateTeamData(teamData);
    })
  }
  formatDateToDayMonthYear(isoDate: string) {
    const date = new Date(isoDate);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  }
  editTeam(data: Team) {
    this.fifaService.updateTeam(data.id, data).subscribe((response: any) => {
      this.getTeams();
    })
  }

  updateTeamData(teamData: DataTeam): void {
    this.fifabState.setTeamData(teamData);
  }
  searchId(id: number) {
    this.fifaService.getTeamById(id).subscribe((response: Team) => {
      let teamData: DataTeam = {
        content: [response]
      };
      this.updateTeamData(teamData);
    });
  }
  error(error: any): void {
    const dialogRef = this.dialog.open(LoginComponent, {
      width: '100%',
      panelClass: 'modal-pricing-plans-page',
      data: {
        title: 'Upss!',
        message: 'Estamos teniendo problemas técnicos, por favor espera mientras traemos tus vuelos de vuelta',
      }
    });
  }


}
