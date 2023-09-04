import { Component } from '@angular/core';
import { combineLatest } from 'rxjs';
import { DataTeam } from 'src/app/entities/model-teams';
import { AuthStateService } from 'src/app/services/auth-state.service';
import { AuthFacadeService } from 'src/app/services/auth.facade';
import { FifaStateService } from 'src/app/services/fifa-state.service';
import { FifaFacadeService } from 'src/app/services/fifa.facade';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css'],
})
export class TeamsComponent {
  teamsListData!: DataTeam;
  authenticated: boolean = false;
  constructor(
    private fifaFacade: FifaFacadeService,
    private fifaState: FifaStateService,
    private authFacade: AuthFacadeService,
    private authState: AuthStateService,
  ) {
    combineLatest([
      this.fifaState.getTeamData(),
      this.authState.getAuthenticated(),
    ]).subscribe(([fifaData, authenticated]) => {
      this.teamsListData = fifaData;
      this.authenticated= authenticated;
    });
  }

  loginUser(data: any) {
    this.authFacade.loginUser(data);
  }
  logoutUser(){
    this.authFacade.logout();
  }
  createTeam(data:any){
    this.fifaFacade.createTeam(data);
  }
  deleteTeam(id:any){
    this.fifaFacade.deleteTeam(id);
  }
  editTeam(data:any){
    this.fifaFacade.editTeam(data);
  }
  searchDate(data:any){
    console.log(data)
    this.fifaFacade.searchDate(data)
  }
  searchId(data:any){
    this.fifaFacade.searchId(data.id);
  }
  searchAllTeams(){
    this.fifaFacade.getTeams();
  }
}
