import { Component, OnInit } from '@angular/core';
import { User } from '../model/user.model';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',

})
export class RegisterComponent implements OnInit {
  user = new User();
 
  confirmPassword: string = '';
  code: number=0 ;
  err: number = 0;
  verif: boolean = false;
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void { }

  register() {
    
    if (this.user.password !== this.confirmPassword) {
      this.err = 2;
      return;
    }


    this.authService.register(this.user).subscribe({
      next: (response: any) => {
        console.log("response from register", response);
        if (response.status === 'success') {
          this.verif = true;
        } else {
  
          this.err = 1;  
        }
      },
      error: (err: any) => {
        this.err = 1;
        console.error('register failed:', err);
      },
    });
    
  }


  verifyCode() {

    this.authService.checkVerifyCode(this.user.email, this.code).subscribe({
      next: (response: any) => {
        if (response.status === 'success') {
      
          this.authService.login(this.user).subscribe({
            next: (data) => {
              let jwToken = data.headers.get('Authorization')!;
              this.authService.saveToken(jwToken);
              this.router.navigate(['/']); 
            },
            error: (err: any) => {
              console.log(err);
              this.err = 1; 
            }
            }
          ); 
        } else {
          this.err = 1;
        }
      },
      error: (err: any) => {
        this.err = 4;  
        console.error('Verification failed:', err);
      },
    });
  }
  
  
}
