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
  err:number = 0;
  success:number = 0;
  constructor(
    private authService : AuthService,
    private router: Router,
  ) {
    
   }

  ngOnInit(): void {
  }
  register() {
    this.authService.register(this.user).subscribe({
      next : (data)=>{
        this.success=1;
        console.log(JSON.stringify(data));
      },error:(err:any)=>{
        this.err = 1; 
        console.error('register failed:', err);
      }
    });
  }
  /** 
  onLoggedin(){
    this.authService.login(this.user).subscribe({
      next: (data) => {
        let jwToken = data.headers.get('Authorization')!;
        this.authService.saveToken(jwToken);
        this.router.navigate(['/']); 
      },
      error: (err: any) => {
        this.err = 1; 
      }
      }
    );     
  } */
}
