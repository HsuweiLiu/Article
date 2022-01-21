import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ShareModule } from 'src/app/_share/share.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { WorkExperiencesComponent } from './home/work-experiences/work-experiences.component';
import { SkillsComponent } from './home/skills/skills.component';
import { IntroductionComponent } from './home/introduction/introduction.component';
import { EducationComponent } from './home/education/education.component';
import { CertificatesComponent } from './home/certificates/certificates.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WorkExperiencesComponent,
    SkillsComponent,
    IntroductionComponent,
    EducationComponent,
    CertificatesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ShareModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
