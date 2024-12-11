import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';

const routes: Routes = [{
  path: '',
  component: UserComponent,

// children: [
//   { path: 'board', component: BoardComponent },
//   { path: 'sprint', component: SprintComponent },
// ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
