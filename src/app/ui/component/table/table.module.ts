import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { TableComponent } from './table';

@NgModule({
	declarations: [TableComponent],
	imports: [
		CommonModule,
		MatTableModule,
		MatPaginatorModule,
		MatSortModule,
		MatButtonModule,
		MatIconModule,
	],
	exports: [TableComponent],
})
export class TableModule {}
