import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  // FastAPI/Flask ka base URL
  private baseUrl = 'http://127.0.0.1:5000/api';

  constructor(private http: HttpClient) {}

  // ✅ Contact form data backend ko bhejne ke liye
  sendContact(data: { name: string; email: string; message: string }): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/contact`, data);  // <-- FIXED URL
  }

  // ✅ Simple GET example (if you have a /hello endpoint)
  getHello(): Observable<any> {
    return this.http.get(`${this.baseUrl}/hello`);
  }

  // ✅ Example POST for adding numbers
  addNumbers(a: number, b: number): Observable<any> {
    return this.http.post(`${this.baseUrl}/add`, { a, b });
  }

  // ✅ Example GET for fetching users
  getUsers(): Observable<any> {
    return this.http.get(`${this.baseUrl}/users`);
  }

  // ✅ Example POST for signup
  signup(username: string, password: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/signup`, { username, password });
  }

  // ✅ Example POST for login
  login(credentials: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, credentials);
  }
}
