import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../services/userservice.service';
@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  user: any = [];
  repo: any = [];
  username: string;

  constructor(private myservice: UserserviceService) {
    this.myservice.getUser().subscribe(user => {
      this.user = user;
    });
    this.myservice.getRepos().subscribe(repo => {
      this.repo = repo;
    });
  }
  findUser() {
    this.myservice.myUpdate(this.username)
    this.myservice.getUser().subscribe(user => {
      this.user = user;
    });
    this.myservice.getRepos().subscribe(repo => {
      this.repo = repo;
    });
  }
  ngOnInit(): void {}

}
