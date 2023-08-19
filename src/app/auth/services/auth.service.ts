import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) {
  }

  login(email: string, password: string): Observable<any> {
    return this.http.post(`${environment.login}`, {email, password});
  }

  register(name: string, email: string, password: string): Observable<any> {
    return this.http.post(`${environment.register}`, {name, email, password});
  }

  isAuthenticated(): boolean {
    const token = localStorage.getItem('token'); // Retrieve token from storage (you can adjust this based on your implementation)
    console.log(!!token)
    return !!token;// Return true if token exists
  }
}
