import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient, private router: Router) {
  }

  login(email: string, password: string): Observable<any> {
    return this.http.post(`${environment.login}`, {email, password});
  }

  adminLogin(username: string, password: string): Observable<any> {
    return this.http.post(`${environment.adminLogin}`, {username, password});
  }

  register(name: string, email: string, password: string): Observable<any> {
    return this.http.post(`${environment.register}`, {name, email, password});
  }

  isAuthenticated(): boolean {
    const token = localStorage.getItem('token'); // Retrieve token from storage (you can adjust this based on your implementation)
    return !!token;// Return true if token exists
  }

  isAdminAuthenticated(): boolean {
    const token = localStorage.getItem('loginToken'); // Retrieve token from storage (you can adjust this based on your implementation)
    return !!token;// Return true if token exists
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['login'])
  }
}
