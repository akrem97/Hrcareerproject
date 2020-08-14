import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import { Admin } from 'src/app/models/admin';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  @ViewChild('f',{static:false}) registerForm: NgForm;
  loader: boolean = false;
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit(): void {
      this.loader = true;
      const newAdmin  = new Admin();
      newAdmin.email = this.registerForm.value.email;
      newAdmin.nom = this.registerForm.value.nom;
      newAdmin.prenom = this.registerForm.value.prenom;
      newAdmin.motdepasse = this.registerForm.value.password;
      this.authService.signUpAdmin(newAdmin).subscribe(
        () =>{
          const usercord = {
            'email': newAdmin.email, 
            'motdepasse': newAdmin.motdepasse
           };
          this.authService.signInAdmin(usercord).subscribe(
            (data)=>{
         this.authService.initializeLocalStorage(data.token);
         this.authService.getTokenClaims(data.token);
         setTimeout (() => {
           this.router.navigateByUrl('/admin');
        }, 1500);
            }
          );
        }
      );
    }
}
