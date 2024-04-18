import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { RatingModule } from 'primeng/rating';
import { ButtonModule } from 'primeng/button';
import { TagModule } from  'primeng/tag'
import { TestTableRoutingModule } from './test-table-routing.module';
import { TestTableComponent } from './test-table.component';


@NgModule({
  declarations: [
    TestTableComponent
  ],
  imports: [
    CommonModule,
    TestTableRoutingModule,
    TableModule,
    ButtonModule,
    TagModule,
    RatingModule
  ]
})
export class TestTableModule { }
