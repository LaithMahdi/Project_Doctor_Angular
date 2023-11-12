import { Component, OnInit } from '@angular/core';
import { User } from '../model/user.model';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { VerifyCodeComponent } from '../verify-code/verify-code.component';

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
        //this.success=1;
        console.log(JSON.stringify(data));
        this.router.navigate(['/verify-code'], {
          queryParams: { email: this.user.email },
        });
      },error:(err:any)=>{
        this.err = 1; 
        console.error('register failed:', err);
      }
    });
  }

}
