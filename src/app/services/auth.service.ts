import { Injectable } from '@angular/core';
import { User } from '../model/user.model';
import { Router } from '@angular/router';
import { apiURL } from '../config';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // users: User[] = [
  //       {"username":"admin","password":"123","roles":['ADMIN']},
  //       {"username":"laith","password":"123","roles":['USER']} 
  // ];
  apiURL: string = 'http://localhost:8081/users';
  private helper = new JwtHelperService();

  token!: string;


  public loggedUser!: string;
  public isloggedIn: Boolean = false;
  public roles!: string[];

  constructor(private router: Router, private http: HttpClient) { }

  login(user: User) {
    return this.http.post<User>(this.apiURL + '/login', user, { observe: 'response' });
  }

  saveToken(jwt: string) {
    localStorage.setItem('jwt', jwt);
    this.token = jwt;
    this.isloggedIn = true;
    this.decodeJWT();
  }
  decodeJWT() {
    if (this.token == undefined)
      return;
    const decodedToken = this.helper.decodeToken(this.token);
    this.roles = decodedToken.roles;
    this.loggedUser = decodedToken.sub;
  }

  loadToken() {
    this.token = localStorage.getItem('jwt')!;
    this.decodeJWT();
  }

  isTokenExpired(): Boolean {
    return this.helper.isTokenExpired(this.token);
  }

  getToken(): string {
    return this.token;
  }
  // SignIn(user :User):Boolean{
  //   let validUser: Boolean = false;
  //   this.users.forEach((curUser) => {
  //     if(user.username== curUser.username && user.password==curUser.password) {
  //       validUser = true;
  //       this.loggedUser = curUser.username;
  //       this.isloggedIn = true;
  //       this.roles = curUser.roles;
  //       localStorage.setItem('loggedUser',this.loggedUser);
  //       localStorage.setItem('isloggedIn',String(this.isloggedIn));
  //     }
  //   });
  //   return validUser;
  // }

  isAdmin(): Boolean {
    if (!this.roles)
      return false;
    return this.roles.indexOf('ADMIN') >= 0;
  }

  logout() {
    this.loggedUser = undefined!;
    this.roles = undefined!;
    this.token = undefined!;
    this.isloggedIn = false;
    localStorage.removeItem('jwt');
    this.router.navigate(['/login']);
  }


  setLoggedUserFromLocalStorage(login: string) {
    this.loggedUser = login;
    this.isloggedIn = true;
    // this.getUserRoles(login);
  }
  // getUserRoles(username :string){
  //   this.users.forEach((curUser) => {
  //     if( curUser.username == username ) {
  //       this.roles = curUser.roles;
  //     }
  //   });
  // }

  register(user: User): Observable<any> {
    return this.http.post<any>(`${this.apiURL}/register`, user, { responseType: 'json' });
  }
  
  checkVerifyCode(email: string, code: number): Observable<any> {
    const data = { email, code };
    return this.http.post<any>(`${this.apiURL}/checkcode`, data);
  }
  
  
}
