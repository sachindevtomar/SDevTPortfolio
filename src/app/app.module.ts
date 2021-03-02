import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './components/home/home.component';
import { EAndEComponent } from './components/e-and-e/e-and-e.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { SkillsComponent } from './components/skills/skills.component';
import { AboutComponent } from './components/about/about.component';
import { NumberTileComponent } from './components/number-tile/number-tile.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { OrderByPipe } from './pipes/order-by.pipe';
import { SkillCardComponent } from './components/skill-card/skill-card.component';
import { CertificationCardComponent } from './components/certification-card/certification-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    EAndEComponent,
    ProjectsComponent,
    SkillsComponent,
    AboutComponent,
    NumberTileComponent,
    ExperienceComponent, 
    OrderByPipe, SkillCardComponent, CertificationCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
