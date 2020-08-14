import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ChartsModule } from 'ng2-charts';
import { MaterialModule } from '../../material/material.module';
import {NgxSimpleCalendarModule} from 'ngx-simple-calendar'; 
import { MDBSpinningPreloader } from '../../../../projects/ng-uikit-pro-standard/src/lib/pro/preloader';
import { ToastModule, ToastService } from '../../../../projects/ng-uikit-pro-standard/src/lib/pro/alerts';
import { MDBBootstrapModulesPro } from '../../../../projects/ng-uikit-pro-standard/src/lib/mdb.module';
import { AdminComponent } from './admin.component';
import { ToolbarComponent } from './adminmanager/toolbar/toolbar.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {LoginComponent} from "./login/login.component";
import {ArticlesComponent} from "./userinfo/articles.component";
import { AdminsComponent } from './adminmanager/admins/admins.component';
import { CategoriesComponent } from './categories/categories.component';
import { EpisodesComponent } from './episodes/episodes.component';
import { AjouterArticleComponent } from './userinfo/addinfo/ajouter-article.component';
import { EditerArticleComponent } from './userinfo/editer-article/editer-article.component';
import { EditerEpisodeComponent } from './episodes/editer-episode/editer-episode.component';
import { AjouterEpisodeComponent } from './episodes/ajouter-episode/ajouter-episode.component';
import { RegisterComponent } from './register/register.component';
import { UpdateCategoryComponent } from './categories/update-category/update-category.component';
import { AdminsRoutingModule } from './admins-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProfileComponent } from './profile/profile.component';
import { AdmininfoComponent } from './admininfo/admininfo.component';
import { CalendarComponent } from './calendar/calendar.component';
import { ChatComponent } from './chat/chat.component';
import { EvaluationComponent } from './evaluation/evaluation.component';


@NgModule({
  declarations: [
    AdminComponent,
    ToolbarComponent,
    FooterComponent,
    DashboardComponent,
    LoginComponent,
    ArticlesComponent,
    AdminsComponent,
    CategoriesComponent,
    EpisodesComponent,
    AjouterArticleComponent,
    EditerArticleComponent,

    EditerEpisodeComponent,
    AjouterEpisodeComponent,
    RegisterComponent,
    UpdateCategoryComponent,
    PageNotFoundComponent,
    ProfileComponent,
    AdmininfoComponent,
    CalendarComponent,
    ChatComponent,
    EvaluationComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NgxSimpleCalendarModule,
    MDBBootstrapModulesPro.forRoot(),
    ToastModule.forRoot(),
    AdminsRoutingModule,
    MaterialModule,
    ChartsModule,
  ],
  providers: [MDBSpinningPreloa