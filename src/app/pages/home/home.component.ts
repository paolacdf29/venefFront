import { Component, OnInit } from '@angular/core';
import { MonedasService } from '../../services/monedas.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  SlideOptions = { 
    items: 3, 
    dots: false,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      }
    }, 
    nav: false 
  };  
  CarouselOptions = { 
    items: 3, 
    dots: false, 
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: false 
  };  

  constructor(public monedas: MonedasService) { }

  ngOnInit() {
  }


}
