import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Cursos } from '../../guards/data.resolver';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit, OnDestroy {
  cursos!: any;
  subscribe!: Subscription;
  constructor(
    private route: ActivatedRoute
  ) {}

  ngOnInit(){
   this.route.data.subscribe((data) => {
    this.cursos = data["cursos"];
   })
  }
  ngOnDestroy(){
    this.subscribe.unsubscribe();
  }
  
}
