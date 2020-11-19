import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-partner',
  templateUrl: './partner.component.html',
  styleUrls: ['./partner.component.scss']
})
export class PartnerComponent implements OnInit {
  @Input() image: string;
  constructor() { }

  ngOnInit() {
  }

}
