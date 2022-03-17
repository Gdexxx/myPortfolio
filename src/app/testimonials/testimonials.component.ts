import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent implements OnInit {

  constructor( private router: Router) { }

  ngOnInit(): void {
    this.works
    this.contact

  }

  works(){
    this.router.navigate(['works']).then(()=>{
      window.location.reload();
    })
  }

  contact(){
    this.router.navigate(['contact']).then(()=>{
      window.location.reload();
    })
  }

}
