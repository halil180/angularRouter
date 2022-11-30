import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.scss']
})
export class UserdetailsComponent implements OnInit {

  constructor(  private route: ActivatedRoute,private http:HttpClient) { 
      this.route.params.subscribe(params => {
        this.id = params['id'];
      });
    }

    id:any;
  ngOnInit(): void {
    this.getDataById(this.id)
  }

user:any;
  getDataById(id:any){
    return this.http.get(`https://jsonplaceholder.typicode.com/todos/${id}`).subscribe((x) => {
      this.user = x
      console.log(x)
    })
  }
}
