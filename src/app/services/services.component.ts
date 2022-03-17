import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  constructor( private router: Router) { }

  ngOnInit(): void {
    this.about
    this.resume
  }

  about(){
    this.router.navigate(['about']).then(()=>{
      window.location.reload();
    })
  }

  resume(){
    this.router.navigate(['resume']).then(()=>{
      window.location.reload();
    })
  }

}
