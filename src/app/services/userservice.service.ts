import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../user/user';
import { Repo } from '../repo/repo';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  username: string;

  constructor(private http: HttpClient) {
    this.username = 'elijah-dot';
  }
  getUser() {
    return this.http.get('https://api.github.com/users/' + this.username)
    .pipe(map(result => result));
  }
  getRepos() {
    return this.http.get('https://api.github.com/users/' + this.username + '/repos')
      .pipe(map(result => result));
  }
  myUpdate(username:string){
    this.username = username

  }
}
