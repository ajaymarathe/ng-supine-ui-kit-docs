import { Component } from '@angular/core';
/*use jquery $ */
declare var $;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-supine-ui-kit-docs';

  ngOnInit() {
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
