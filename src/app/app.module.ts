import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgFontawesomeModule } from 'ng-fontawesome-icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

/* custom components*/
import { BaseNavbarComponent } from './components/base-navbar/base-navbar.component';
import { BaseCardComponent } from './components/base-card/base-card.component';
import { BaseCardBodyComponent } from './components/base-card/base-card-body/base-card-body.component';
import { BaseCardHeaderComponent } from './components/base-card/base-card-header/base-card-header.component';
import { BaseCardFooterComponent } from './components/base-card/base-card-footer/base-card-footer.component';
import { BaseBadgeComponent } from './components/base-badge/base-badge.component';
import { BaseButtonComponent } from './components/base-button/base-button.component';
import { BaseDropdownComponent } from './components/base-dropdown/base-dropdown.component';
import { BaseDropdownMenuComponent } from './components/base-dropdown/base-dropdown-menu/base-dropdown-menu.component';
import { BaseCarouselComponent } from './components/base-carousel/base-carousel.component';
import { BaseCarouselIndicatorComponent } from './components/base-carousel/base-carousel-indicator/base-carousel-indicator.component';
import { BaseCarouselInnerComponent } from './components/base-carousel/base-carousel-inner/base-carousel-inner.component';
import { BaseSlideIndicatorComponent } from './components/base-carousel/base-slide-indicator/base-slide-indicator.component';
import { BaseCarouselCaptionComponent } from './components/base-carousel/base-carousel-caption/base-carousel-caption.component';
import { BaseProgressComponent } from './components/base-progress/base-progress.component';
import { BaseSpinnerComponent } from './components/base-spinner/base-spinner.component';
import { BaseModalComponent } from './components/base-modal/base-modal.component';
import { BaseModalHeaderComponent } from './components/base-modal/base-modal-header/base-modal-header.component';
import { BaseModalBodyComponent } from './components/base-modal/base-modal-body/base-modal-body.component';
import { BaseModalFooterComponent } from './components/base-modal/base-modal-footer/base-modal-footer.component';
import { CloseButtonComponent } from './components/close-button/close-button.component';
import { BaseAlertComponent } from './components/base-alert/base-alert.component';
import { OverviewComponent } from './docs/overview/overview.component';
import { LicenseComponent } from './docs/license/license.component';
import { ButtonComponent } from './docs/button/button.component';
import { AlertComponent } from './docs/alert/alert.component';
import { BadgeComponent } from './docs/badge/badge.component';
import { CardComponent } from './docs/card/card.component';
import { CarouselComponent } from './docs/carousel/carousel.component';
import { DropdownComponent } from './docs/dropdown/dropdown.component';
import { ModalComponent } from './docs/modal/modal.component';
import { NavbarComponent } from './docs/navbar/navbar.component';
import { ProgressComponent } from './docs/progress/progress.component';
import { SpinnerComponent } from './docs/spinner/spinner.component';
import { PaginationComponent } from './docs/pagination/pagination.component';
import { FormsComponent } from './docs/forms/forms.component';
import { TooltipComponent } from './docs/tooltip/tooltip.component';
import { PopoverComponent } from './docs/popover/popover.component';
import { TabsComponent } from './docs/tabs/tabs.component';
import { ImagesComponent } from './docs/images/images.component';
import { TypographyComponent } from './docs/typography/typography.component';
import { CloseComponent } from './docs/close/close.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BaseNavbarComponent,
    BaseCardComponent,
    BaseCardBodyComponent,
    BaseCardHeaderComponent,
    BaseCardFooterComponent,
    BaseBadgeComponent,
    BaseButtonComponent,
    BaseDropdownComponent,
    BaseDropdownMenuComponent,
    BaseCarouselComponent,
    BaseCarouselIndicatorComponent,
    BaseCarouselInnerComponent,
    BaseSlideIndicatorComponent,
    BaseCarouselCaptionComponent,
    BaseProgressComponent,
    BaseSpinnerComponent,
    BaseModalComponent,
    BaseModalHeaderComponent,
    BaseModalBodyComponent,
    BaseModalFooterComponent,
    CloseButtonComponent,
    BaseAlertComponent,
    OverviewComponent,
    LicenseComponent,
    ButtonComponent,
    AlertComponent,
    BadgeComponent,
    CardComponent,
    CarouselComponent,
    DropdownComponent,
    ModalComponent,
    NavbarComponent,
    ProgressComponent,
    SpinnerComponent,
    PaginationComponent,
    FormsComponent,
    TooltipComponent,
    PopoverComponent,
    TabsComponent,
    ImagesComponent,
    TypographyComponent,
    CloseComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgFontawesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
