import { Component, OnInit } from '@angular/core';
import { HighlightService } from '../../highlight.service';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss']
})
export class PopoverComponent implements OnInit {

  constructor( private highlightService: HighlightService) { }
  
  ngOnInit() {
    this.highlightService.highlightAll();
  }

}
