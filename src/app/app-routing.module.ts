import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EAndEComponent } from './components/e-and-e/e-and-e.component';
import { HomeComponent } from './components/home/home.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { SkillsComponent } from './components/skills/skills.component';

const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'e-and-e', component: EAndEComponent},
  {path:'projects', component: ProjectsComponent},
  {path:'skills', component: SkillsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
