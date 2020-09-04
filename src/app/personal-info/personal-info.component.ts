import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.css'],
  providers: [NgbCarouselConfig],
})
export class PersonalInfoComponent implements OnInit {
  // list = [1];
  images = ['assets/scroll.jpg', 'assets/scroll2.jpg', 'assets/scroll3.jpg', 'assets/scroll2.jpg'];
  list = [
    { title: 'Twilight 1', show: true, img: 'assets/twilight_small.jpg' , rating: '2'},
    { title: 'Twilight 2', show: true, img: 'assets/twilight2_small.jpg', rating: '3' },
    { title: 'Twilight 3', show: true, img: 'assets/twilight2_small.jpg', rating: '4' },

  ];
  currentRate: string;

  constructor(config: NgbCarouselConfig, private modalService: NgbModal, private router: Router) {
    // customize default values of carousels used by this component tree
    config.interval = 10000;
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = false;
  }

  ngOnInit(): void {}

  // tslint:disable-next-line:typedef
  myfun() {
    console.log('hello rating function' + this.currentRate);
  }

  // tslint:disable-next-line:typedef
  showDetailsModal(item) {
    console.log(item);

    const modalRef = this.modalService.open(DetailsModalComponent, {
      centered: true,
    });
    modalRef.componentInstance.name = 'World';
    modalRef.componentInstance.data = item;
  }


  // tslint:disable-next-line:typedef
  contentPage(title) {
    // console.log(title);
    const temp = '/home/' + title;
    this.router.navigate([temp]);
  }
}
