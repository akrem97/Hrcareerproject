import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminsComponent } from './adminmanager/admins/admins.component';
import { CategoriesComponent } from './categories/categories.component';
import { EpisodesComponent } from './episodes/episodes.component';
import { AjouterEpisodeComponent } from './episodes/ajouter-episode/ajouter-episode.component';
import { EditerEpisodeComponent } from './episodes/editer-episode/editer-episode.component';
import { ArticlesComponent } from './userinfo/articles.component';
import { AjouterArticleComponent } from './userinfo/addinfo/ajouter-article.component';
import { EditerArticleComponent } from './userinfo/editer-article/editer-article.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuard } from 'src/app/auth/auth-guard.service';
 import { AdmininfoComponent } from './admininfo/admininfo.component';
import { CalendarComponent } from './calendar/calendar.component';

const adminsRoutes: Routes = [
    {path: '', redirectTo: 'adminlogin', pathMatch:'full'},
    {path: 'adminlogin', component: LoginComponent},
    {path: 'adminregister', component: RegisterComponent},
    {path: 'admin' , canActivate:[AuthGuard],  component: AdminComponent ,
      children: [
        {path: 'dashboard' , component: DashboardComponent},
        {path: 'profil' , component: ProfileComponent},
        {path: 'calendar' , component: CalendarComponent},
        {path: 'admininfo' , component: AdmininfoComponent},
        {path: 'admins' , component: AdminsComponent},
        {path: 'categories' , component: CategoriesComponent},
        {path: 'episodes' , component: EpisodesComponent},
        {path: 'addepisode' , component: AjouterEpisodeComponent},
        {path: 'episode/:id/edit' , component: EditerEpisodeComponent},
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