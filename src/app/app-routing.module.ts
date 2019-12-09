import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomeComponent} from "./home/home.component";
/*docs*/
import {OverviewComponent} from "./docs/overview/overview.component";
import {AlertComponent} from "./docs/alert/alert.component";
import {BadgeComponent} from "./docs/badge/badge.component";
import {CardComponent} from "./docs/card/card.component";
import {ButtonComponent} from "./docs/button/button.component";
import {CarouselComponent} from "./docs/carousel/carousel.component";
import {DropdownComponent} from "./docs/dropdown/dropdown.component";
import {FormsComponent} from "./docs/forms/forms.component";
import {ImagesComponent} from "./docs/images/images.component";
import {LicenseComponent} from "./docs/license/license.component";
import {ModalComponent} from "./docs/modal/modal.component";
import {NavbarComponent} from "./docs/navbar/navbar.component";
import {PaginationComponent} from "./docs/pagination/pagination.component";
import {CloseComponent} from "./docs/close/close.component";
import {PopoverComponent} from "./docs/popover/popover.component";
import {ProgressComponent} from "./docs/progress/progress.component";
import {SpinnerComponent} from "./docs/spinner/spinner.component";
import {TabsComponent} from "./docs/tabs/tabs.component";
import {TooltipComponent} from "./docs/tooltip/tooltip.component";
import {TypographyComponent} from "./docs/typography/typography.component";


const routes: Routes = [
  { path: '', component: OverviewComponent },
  { path: 'alert', component: AlertComponent },
  { path: 'badge', component: BadgeComponent },
  { path: 'card', component: CardComponent },
  { path: 'button', component: ButtonComponent },
  { path: 'carousel', component: CarouselComponent },
  { path: 'close', component: CloseComponent },
  { path: 'dropdown', component: DropdownComponent },
  { path: 'forms', component: FormsComponent },
  { path: 'images', component: ImagesComponent },
  { path: 'license', component: LicenseComponent },
  { path: 'modal', component: ModalComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: 'pagination', component: PaginationComponent },
  { path: 'popover', component: PopoverComponent },
  { path: 'progress', component: ProgressComponent },
  { path: 'spinner', component: SpinnerComponent },
  { path: 'tabs', component: TabsComponent },
  { path: 'tooltip', component: TooltipComponent },
  { path: 'typography', component: TypographyComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
