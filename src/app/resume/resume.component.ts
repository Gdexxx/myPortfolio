import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {

  constructor( private router: Router) { }

  ngOnInit(): void {
    this.services
    this.works
    
  }

  services(){
    this.router.navigate(['services']).then(()=>{
      window.location.reload();
    })
  }
  
  works(){
    this.router.navigate(['works']).then(()=>{
      window.location.reload();
    })
  }


}
