import { NotesComponent } from './notes/notes.component';
import { CalculateBowlingScoreComponent } from './calculate-bowling-score/calculate-bowling-score.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    component:CalculateBowlingScoreComponent
  },
  {
    path:'notes',
    component:NotesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
