import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.scss']
})
export class DetalhesComponent implements OnInit, OnDestroy{
  id!: string;
  subscribe!: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ){}
  
  ngOnInit() {
    this.subscribe = this.route.params.subscribe((params) => this.id = params['id'])
  }
  ngOnDestroy(){
    this.subscribe.unsubscribe()
  }
}
