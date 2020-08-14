import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

import { MDBSpinningPreloader } from '../../../../projects/ng-uikit-pro-standard/src/lib/pro/preloader';
import { ToastModule, ToastService } from '../../../../projects/ng-uikit-pro-standard/src/lib/pro/alerts';
import { MDBBootstrapModulesPro } from '../../../../projects/ng-uikit-pro-standard/src/lib/mdb.module';

import { UserComponent } from './user.component';
import { MaterialModule } from '../../material/material.module';

const userRoutes: Routes = [];

@NgModule({
  declarations: [UserComponent],
  imports: [
    CommonModule,
    MDBBootstrapModulesPro.forRoot(),
    ToastModule.forRoot(),
    MaterialModule,
    RouterModule.forChild(userRoutes),
  ],
  providers: [MDBSpinningPreloader, ToastService],
  exports: [
    UserComponent,
  ],
})
export class UserModule { }
