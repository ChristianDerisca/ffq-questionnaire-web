import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from './app.component';
import {QuestionnairePageComponent} from './pages/questionnaire-page/questionnaire-page.component';
import {QuestIdInputComponent} from './pages/quest-id-input-page/quest-id-input.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'questionnaire-id', pathMatch: 'full'
  },
  {
    path: 'questionnaire-id', component: QuestIdInputComponent
  },
  {
    path: 'questionnaire/:id', component: QuestionnairePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }