import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TopComponent } from './components/top/top.component';
import { LinksComponent } from './components/links/links.component';
import { TutorialsComponent } from './components/tutorials/tutorials.component';
import { AboutComponent } from './components/about/about.component';
import { MarkdownModule } from 'ngx-markdown';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  { path: '', component: TopComponent },
  { path: 'links', component: LinksComponent },
  { path: 'tutorials', component: TutorialsComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  declarations: [TopComponent, LinksComponent, TutorialsComponent, AboutComponent],
  imports: [RouterModule.forRoot(routes), MarkdownModule.forChild(), HttpClientModule],
  exports: [RouterModule],
})
export class AppRoutingModule { }
