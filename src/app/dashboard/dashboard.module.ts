import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DemoMaterialModule } from '../demo-material-module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutes } from './dashboard.routing';
import { NgApexchartsModule } from 'ng-apexcharts';
import { SalesOverviewComponent } from './dashboard-components/sales-overview/sales-overview.component';
import { OurVisiterComponent } from './dashboard-components/our-visiter/our-visiter.component';
import { ProfileComponent } from './dashboard-components/profile/profile.component';
import { ContactsComponent } from './dashboard-components/contacts/contacts.component';
import { ActivityTimelineComponent } from './dashboard-components/activity-timeline/activity-timeline.component';
import { MatCarouselModule } from 'ng-mat-carousel';
import { EventComponent } from './event/event.component';
import { EventListComponent } from './event-list/event-list.component';
import { StockComponent } from './stock/stock.component';
import { GoldComponent } from './gold/gold.component';
import { SalesComponent } from './sales/sales.component';
import { CircularComponent } from './circular/circular.component';
import { StockPriceComponent } from './stock-price/stock-price.component';
import { GoldPriceComponent } from './gold-price/gold-price.component';
import { ApplicationsComponent } from './applications/applications.component';
import { QuizComponent } from './quiz/quiz.component';
import { HolidayComponent } from './holiday/holiday.component';

@NgModule({
  imports: [
    CommonModule,
    DemoMaterialModule,
    FlexLayoutModule,
    NgApexchartsModule,
    RouterModule.forChild(DashboardRoutes),
    MatCarouselModule.forRoot(),
  ],
  declarations: [DashboardComponent, SalesOverviewComponent, OurVisiterComponent, ProfileComponent, ContactsComponent, ActivityTimelineComponent, EventComponent, EventListComponent, StockComponent,StockPriceComponent, GoldComponent, SalesComponent, CircularComponent, GoldPriceComponent, ApplicationsComponent, QuizComponent, HolidayComponent],
  exports: [ApplicationsComponent]

})
export class DashboardModule {}
