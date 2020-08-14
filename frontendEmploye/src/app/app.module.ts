import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { MDBSpinningPreloader } from '../../projects/ng-uikit-pro-standard/src/lib/pro/preloader';
import { ToastModule, ToastService } from '../../projects/ng-uikit-pro-standard/src/lib/pro/alerts';
import { MDBBootstrapModulesPro } from '../../projects/ng-uikit-pro-standard/src/lib/mdb.module';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { UserModule } from './components/user/user.module';
import { AdminModule } from './components/admin/admin.module';
import {PodcastsService} from './services/podcasts.service';
import {EpisodesService} from './services/episodes.service';
import { ArticlesService } from './services/articles.service';
import { CategoriesService } from './services/categories.service';
import { AdminsService } from './services/admins.service';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './auth/auth-guard.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './auth/auth.interceptor';
@NgModule({
  
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    MDBBootstrapModulesPro.forRoot(),
    ToastModule.forRoot(),
    MaterialModule,
    UserModule,
    AdminModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ],
  providers: [MDBSpinningPreloader, ToastService, 
    PodcastsService, 
    EpisodesService,  
    ArticlesService , 
    CategoriesService, 
    AdminsService,
    AuthService,
    {provide: HTTP_INTERCEPTORS ,  useClass:AuthInterceptor, multi: true},
    AuthGuard
    ],
  bootstrap: [AppComponent],
})

export class AppModule {}
