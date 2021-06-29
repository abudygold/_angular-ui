import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CRUDAddComponent } from './page/crud-add';
import { CRUDEditComponent } from './page/crud-edit';
import { CRUDListComponent } from './page/crud-list';

const routes: Routes = [
	{
		path: '',
		component: CRUDListComponent,
	},
	{
		path: 'add',
		component: CRUDAddComponent,
	},
	{
		path: 'edit/:id',
		component: CRUDEditComponent,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class CRUDRoutingModule {}
