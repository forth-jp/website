import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TopComponent } from './components/top/top.component';

const routes: Routes = [
  { path: '', component: TopComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  declarations: [TopComponent],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
