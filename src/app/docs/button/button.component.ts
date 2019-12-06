import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { HighlightService } from '../../highlight.service';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  constructor( private highlightService: HighlightService) { }
  ngOnInit() {
    this.highlightService.highlightAll();
  }

}
