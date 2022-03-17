import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.css']
})
export class WorksComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.resume
    this.testimonials
  }

  resume(){
    this.router.navigate(['resume']).then(()=>{
      window.location.reload();
    })
  }

  testimonials(){
    this.router.navigate(['testimonials']).then(()=>{
      window.location.reload();
    })
  }

}
