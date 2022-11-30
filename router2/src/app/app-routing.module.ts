import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProgrammingLanguagesComponent } from './programming-languages/programming-languages.component';
import { SpokenLanguagesComponent } from './spoken-languages/spoken-languages.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {path:"spoken",component:SpokenLanguagesComponent},
  {path:"programming",component:ProgrammingLanguagesComponent},
  {path:"", redirectTo:"spoken", pathMatch:"full"},
  {path:"users",component:UsersComponent },
  {path:"user/:id",component:UserdetailsComponent},
  {path:"**",component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
