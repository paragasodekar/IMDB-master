import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.css'],
  providers: [NgbCarouselConfig],
})
export class PersonalInfoComponent implements OnInit {
  // list = [1];
  images = ['assets/scroll.jpg', 'assets/scroll2.jpg', 'assets/scroll3.jpg', 'assets/scroll2.jpg'];

  constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.interval = 10000;
    config.wrap = false;
    config.keyboard = false;
    config.pauseOnHover = false;
  }

  ngOnInit(): void {}
}
