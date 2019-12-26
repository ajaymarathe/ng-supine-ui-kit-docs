import { Component, OnInit } from '@angular/core';
import { HighlightService } from '../../highlight.service';

// use jquery
declare var $;

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss']
})
export class PopoverComponent implements OnInit {

  constructor( private highlightService: HighlightService) { }
  
  ngOnInit() {
    this.highlightService.highlightAll();

    this.EnableTooltip();
    this.EnablePopOver();
  }

  /*Enable boostrap Tooltip*/
  EnableTooltip(){
    $(function () {
      $('[data-toggle="tooltip"]').tooltip();
    });
  }

  /*Enable Popover*/
  EnablePopOver(){
    $(function () {
      $('[data-toggle="popover"]').popover();
    });
  }

}
