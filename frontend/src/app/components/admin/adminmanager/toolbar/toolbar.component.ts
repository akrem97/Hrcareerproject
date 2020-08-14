import { Component, OnInit, ViewChild } from '@angular/core';
import { SidenavComponent } from 'ng-uikit-pro-standard';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  @ViewChild('sidenav', {static: true}) sidenav: SidenavComponent;
  allowaccess :boolean ;
  admin_prenom: string;
  constructor(private authService:AuthService, private router:Router) { 
    const tokenloc = localStorage.getItem('access_token');
    var token : any = tokenloc;
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace('-', '+').replace('_', '/');
    var tokenInfo = JSON.parse(window.atob(base64));
    this.admin_prenom = tokenInfo.prenom;
    this.allowaccess = tokenInfo.role == 'admin';
  }

  ngOnInit() {
    
  }

  onLogOut(): void{
    this.authService.logOut();
    this.router.navigate(['/adminlogin']);
  }

  hideSidenavAfterClick() {
    if (window.innerWidth <= 1300) {
      this.sidenav.hide();
    }
  }




}
