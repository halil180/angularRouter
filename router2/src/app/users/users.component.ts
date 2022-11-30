import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {


  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.getData()
  }
users!:any;
  getData(){
    return this.http.get("https://jsonplaceholder.typicode.com/todos").subscribe((x) => {
      this.users = x
      console.log(x)
    })
  }

}
