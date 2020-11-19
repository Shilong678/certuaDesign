import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.scss']
})
export class OfferComponent implements OnInit {
  @Input() avatar: string;
  @Input() title: string;
  @Input() description: string;
  constructor() { }

  ngOnInit() {
  }

}
