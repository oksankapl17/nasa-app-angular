import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PhotoFormComponent} from './components/photo-form/photo-form.component';
import {EpicFormComponent} from './components/epic-form/epic-form.component';
import {NotFoundComponent} from './components/not-found/not-found.component';

const routes: Routes = [
  {path: '', redirectTo: '/rovers', pathMatch: 'full'},
  {path: 'rovers', component: PhotoFormComponent},
  {path: 'epic', component: EpicFormComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
