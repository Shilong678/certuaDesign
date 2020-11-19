import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-proposition',
  templateUrl: './proposition.component.html',
  styleUrls: ['./proposition.component.scss']
})
export class PropositionComponent implements OnInit {
 @Input() avatar: string;
 @Input() title: string;
 @Input() description: string;
  constructor() { }

  ngOnInit() {
  }

}
