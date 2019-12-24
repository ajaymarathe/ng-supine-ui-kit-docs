import { Component, OnInit } from '@angular/core';
import { HighlightService } from '../../highlight.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  constructor( private highlightService: HighlightService) { }
  
  ngOnInit() {
    this.highlightService.highlightAll();
  }

}
