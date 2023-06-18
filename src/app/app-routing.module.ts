import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Navbar2Component } from './navbar2/navbar2.component';
import { FocusComponent } from './focus/focus.component';

const routes: Routes = [
  { path: "focus", component:FocusComponent}

  // {path:'',
  //  component:Navbar2Component,
  //  children: [
  //   // { path: "", redirectTo:"Navbar",pathMatch:'full' },
  //   // { path: "home", component:HomeComponent},
  //   { path: "focus", component:FocusComponent}
  //   ]  
  // },
  // {path:"", redirectTo: "/Home", pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
