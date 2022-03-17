import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AboutComponent } from '../about/about.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
    this.welcome
    this.about
    this.services
    this.resume
    this.works
    this.testimonials
    this.contact
    // location.reload() 
  }


  welcome(){
    this.router.navigate(['welcome']) .then(() => {
      window.location.reload();
    }); 

  }
  about(){
    this.router.navigate(['about']).then(()=>{
      window.location.reload();
    })   
  }

  services(){
    this.router.navigate(['services']).then(()=>{
      window.location.reload();
    })
  }

  resume(){
    this.router.navigate(['resume']).then(()=>{
      window.location.reload();
    })
  }

  works(){
    this.router.navigate(['works']).then(()=>{
      window.location.reload();
    })
  }
  testimonials(){
    this.router.navigate(['testimonials']).then(()=>{
      window.location.reload();
    })
  }
  contact(){
    this.router.navigate(['contact']).then(()=>{
      window.location.reload();
    })
  }
}
