import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TopComponent } from './components/top/top.component';
import { LinksComponent } from './components/links/links.component';
import { TutorialsComponent } from './components/tutorials/tutorials.component';
import { AboutComponent } from './components/about/about.component';

const routes: Routes = [
  { path: '', component: TopComponent },
  { path: 'links', component: LinksComponent },
  { path: 'tutorials', component: TutorialsComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  declarations: [TopComponent, LinksComponent, TutorialsComponent, AboutComponent],
  imports: [RouterModule.forRoot(routes), FontAwesomeModule],
  exports: [RouterModule],
})
export class AppRoutingModule { }
