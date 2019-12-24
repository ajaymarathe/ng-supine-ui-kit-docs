import { Component, OnInit } from '@angular/core';
import { HighlightService } from '../../highlight.service';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {

  constructor( private highlightService: HighlightService) { }
  
  ngOnInit() {
    this.highlightService.highlightAll();
  }

}
