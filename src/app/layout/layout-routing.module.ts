import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './page/layout';

const routes: Routes = [
	{
		path: '',
		component: LayoutComponent,
		children: [
			{
				path: '',
				loadChildren: () =>
					import('../pages/homepage/homepage.module').then(
						m => m.HomepageModule
					),
			},
			{
				path: 'crud',
				loadChildren: () =>
					import('../pages/crud/crud.module').then(m => m.CRUDModule),
			},
		],
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class LayoutRoutingModule {}
