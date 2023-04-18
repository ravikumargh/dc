import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TestComponent } from './test/test.component';
import { CircularRoutes } from './circular.routing';
import { ListComponent } from './list/list.component';
import { MatTreeModule } from '@angular/material/tree';
import { DemoMaterialModule } from '../demo-material-module';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [
    TestComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    MatTreeModule,
        FlexLayoutModule,
        DemoMaterialModule,
    RouterModule.forChild(CircularRoutes),

  ]
})
export class CircularModule { }
