import { AfterViewInit,Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { NgxSmartModalService } from 'ngx-smart-modal';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements AfterViewInit {

  constructor(public ngxSmartModalService: NgxSmartModalService){}

  ngAfterViewInit(){
    this.ngxSmartModalService.setModalData({},'popupOne'); 
  }


}



