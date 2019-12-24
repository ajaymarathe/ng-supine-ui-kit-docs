import { Component, OnInit } from '@angular/core';
import { HighlightService } from '../../highlight.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

  constructor( private highlightService: HighlightService) { }
  
  ngOnInit() {
    this.highlightService.highlightAll();
  }

}
