import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ChatroomComponent } from './chatroom/chatroom.component';
import { AccountComponent } from './account/account.component';

const routes: Routes = [
  {path:'login', component: HomeComponent},
  {path:'chatroom', component: ChatroomComponent},
  {path:'account', component: AccountComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
