import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrgChartComponent } from './org-chart/org-chart.component';
import { EntityComponent } from './entity/entity.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [OrgChartComponent,EntityComponent],
  exports:[
    OrgChartComponent
  ]
})
export class OrgChartModule { }
