import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar2',
  templateUrl: './navbar2.component.html',
  styleUrls: ['./navbar2.component.css']
})
export class Navbar2Component {
  constructor(private _router: Router){
  };



onClick():void{
  // this._router.navigate(['/home'])
  this._router.navigateByUrl("/focus")
  console.log("hi")
}
}
