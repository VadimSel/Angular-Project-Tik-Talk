import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { AuthSuccessResponse } from "../app.types";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  http = inject(HttpClient);
  baseApiUrl = 'https://icherniakov.ru/yt-course/auth/';

  login(payload: {username: string, password: string}): Observable<AuthSuccessResponse> {
    const fd = new FormData()

    fd.append('username', payload.username)
    fd.append('password', payload.password)

    return this.http.post<AuthSuccessResponse>(`${this.baseApiUrl}token`, fd)

  }
}
