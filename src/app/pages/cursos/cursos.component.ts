import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit, OnDestroy {

  subscribe!: Subscription;
  constructor(
    private route: ActivatedRoute
  ) {}

  ngOnInit(){
   this.subscribe = this.route.queryParams.subscribe((query) => { console.log(query) })
  }
  ngOnDestroy(){
    this.subscribe.unsubscribe();
  }
  
}
