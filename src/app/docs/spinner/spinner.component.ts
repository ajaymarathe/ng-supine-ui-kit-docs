import { Component, OnInit } from '@angular/core';
import { HighlightService } from '../../highlight.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit {

  constructor( private highlightService: HighlightService) { }
  
  ngOnInit() {
    this.highlightService.highlightAll();
  }

}
