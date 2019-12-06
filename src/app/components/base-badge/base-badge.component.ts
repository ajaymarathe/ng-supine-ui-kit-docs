import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'base-badge',
  templateUrl: './base-badge.component.html',
  styleUrls: ['./base-badge.component.css']
})
export class BaseBadgeComponent implements OnInit {
  @Input() color: string;
  @Input() variant: string;
  constructor() { }

  ngOnInit() {
  }

}
