import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TeamsRoutingModule } from './teams-routing.module';
import { TeamsComponent } from './teams.component';
import { FifaFacadeService } from 'src/app/services/fifa.facade';
import { CardTeamsComponent } from './components/card-teams/card-teams.component';
import { FilterFifaComponent } from './components/filter-fifa/filter-fifa.component';
import { MaterialAngularModule } from '../material-angular/material-angular.module';
import { AuthFacadeService } from 'src/app/services/auth.facade';

@NgModule({
  declarations: [
    TeamsComponent,
    CardTeamsComponent,
    FilterFifaComponent,
  ],
  imports: [
    TeamsRoutingModule,
    MaterialAngularModule,
    ReactiveFormsModule,
    CommonModule,
    ReactiveFormsModule
  ],
  providers:[FifaFacadeService,AuthFacadeService]
})
export class TeamsModule { }
