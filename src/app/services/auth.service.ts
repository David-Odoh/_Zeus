import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authToken: any;
  user: any;

  constructor(private http: Http) { }

  registerUser(user) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/auth/register', user, { headers: headers })
      .pipe(
      map(res => res.json())
      );
  }

  authenticateUser(user) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/users/authenticate', user, { headers: headers })
      .pipe(
      map(res => res.json())
      );
  }


  getProfile() {
    const headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.get('http://localhost:3000/users/profile', { headers: headers })
      .pipe(
      map(res => res.json())
      );
  }

  storeUserData(token, user) {
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;

  }

  loadToken() {
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }

  loggedIn() {
    // return tokenNotExpired();
  }

  logout() {
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }
}
