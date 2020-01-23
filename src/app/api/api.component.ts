import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service'; 
import { Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { increment, decrement, reset } from '../counter.actions';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class ApiComponent implements OnInit {
  data=[]
  

  constructor(private configService: ConfigService ) { }
  ngOnInit() {
  }

  get_data(){
    console.log("HITTING API")
    this.configService.get_data().subscribe((res)=>{
      console.log('response',res);
    });
  }


}
