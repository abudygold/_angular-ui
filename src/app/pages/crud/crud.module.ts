import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormModule } from '../../ui/component/form/form.module';
import { SearchModule } from '../../ui/component/search/search.module';
import { TableModule } from '../../ui/component/table/table.module';
import { ConfirmationModule } from '../../ui/dialog/confirmation/confirmation.module';
import { CRUDFormComponent } from './component/crud-form';
import { CRUDRoutingModule } from './crud-routing.module';
import { CRUDAddComponent } from './page/crud-add';
import { CRUDEditComponent } from './page/crud-edit';
import { CRUDListComponent } from './page/crud-list';

@NgModule({
	declarations: [
		CRUDListComponent,
		CRUDAddComponent,
		CRUDEditComponent,
		CRUDFormComponent,
	],
	imports: [
		CommonModule,
		CRUDRoutingModule,
		FormsModule,
		ReactiveFormsModule,
		MatIconModule,
		MatButtonModule,
		SearchModule,
		TableModule,
		ConfirmationModule,
		FormModule,
	],
})
export class CRUDModule {}
