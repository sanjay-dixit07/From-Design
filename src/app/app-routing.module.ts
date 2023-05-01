import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { EducationalDetailsComponent } from './educational-details/educational-details.component';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { AchievementDetailsComponent } from './achievement-details/achievement-details.component';
import { TechskillComponent } from './techskill/techskill.component';
import { ResumeDisplayComponent } from './resume-display/resume-display.component';

const routes: Routes = [
  { path: '', redirectTo:'personal' ,pathMatch:'full'},
  { path: 'home', component:AppComponent },
  { path: 'personal', component:PersonalDetailsComponent },
  { path: 'education', component:EducationalDetailsComponent },
  { path: 'project', component:ProjectDetailsComponent },
  { path: 'achievement', component:AchievementDetailsComponent },
  { path: 'techskill', component:TechskillComponent },
  { path: 'resumedisplay', component:ResumeDisplayComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
