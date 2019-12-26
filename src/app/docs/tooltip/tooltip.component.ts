import { Component, OnInit } from '@angular/core';
import { HighlightService } from '../../highlight.service';

declare var $;

@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss']
})
export class TooltipComponent implements OnInit {

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
