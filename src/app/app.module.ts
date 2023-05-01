import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { DragDropModule }from '@angular/cdk/drag-drop';
import { AppComponent } from './app.component';
import { EducationalDetailsComponent } from './educational-details/educational-details.component';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { AchievementDetailsComponent } from './achievement-details/achievement-details.component';
import { TechskillComponent } from './techskill/techskill.component';
import { ResumeDisplayComponent } from './resume-display/resume-display.component';
import {NgxPrintModule} from 'ngx-print';

@NgModule({
  declarations: [
    AppComponent,
    EducationalDetailsComponent,
    PersonalDetailsComponent,
    ProjectDetailsComponent,
    AchievementDetailsComponent,
    TechskillComponent,
    ResumeDisplayComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    DragDropModule,
    NgxPrintModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
