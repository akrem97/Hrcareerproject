import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminsComponent } from './adminmanager/admins/admins.component';
import { ArticlesComponent } from './userinfo/articles.component';
import { AjouterArticleComponent } from './userinfo/addinfo/ajouter-article.component';
import { EditerArticleComponent } from './userinfo/editer-article/editer-article.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuard } from 'src/app/auth/auth-guard.service';
 import { AdmininfoComponent } from './admininfo/admininfo.component';
import { CalendarComponent } from './calendar/calendar.component';
import { QuizComponent } from './quiz/quiz.component';

const adminsRoutes: Routes = [
    {path: '', redirectTo: 'adminlogin', pathMatch:'full'},
    {path: 'adminlogin', component: LoginComponent},
    {path: 'adminregister', component: RegisterComponent},
    {path: 'admin' , canActivate:[AuthGuard],  component: AdminComponent ,
      children: [
        {path :  'quiz', component :QuizComponent},
        {path: 'dashboard' , component: DashboardComponent},
        {path: 'profil' , component: ProfileComponent},
        {path: 'calendar' , component: CalendarComponent},
        {path: 'admininfo' , component: AdmininfoComponent},
        {path: 'admins' , component: AdminsComponent},
        {path: 'articles',component: ArticlesComponent},
        {path: 'addarticle' , component: AjouterArticleComponent},
        {path: 'article/:id/edit' , component: EditerArticleComponent},
        {path: 'myprofil' , component: AjouterArticleComponent},
        {path: '', component: DashboardComponent}
      ]
    },

];

@NgModule({
imports: [RouterModule.forChild(adminsRoutes)],
exports: [RouterModule]
})
export class AdminsRoutingModule {
}