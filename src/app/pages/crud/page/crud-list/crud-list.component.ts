import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { BaseService } from '../../../../core/base-service/service';
import { TableActionModel, TableModel } from '../../../../core/model';
import { ConfirmationComponent } from '../../../../ui/dialog/confirmation/confirmation';
import { ConfirmationModel } from '../../../../ui/dialog/confirmation/shared/model';
import {
	UserServicePathConst,
	UserTableColumnConst,
	UserTableLabelConst,
} from '../../shared/const';
import { UserModel } from '../../shared/model';

@Component({
	selector: 'app-crud-list',
	templateUrl: './crud-list.component.html',
	styleUrls: ['./crud-list.component.scss'],
})
export class CRUDListComponent implements OnInit, OnDestroy {
	private subscribers: Subscription[];

	public isLoading: boolean;
	public table: TableModel;

	constructor(
		private router: Router,
		private activatedRoute: ActivatedRoute,
		private dialog: MatDialog,
		private baseService: BaseService
	) {}

	ngOnInit(): void {
		this.isLoading = false;
		this.subscribers = [];

		this.initTable();
		this.getViewListService();
	}

	ngOnDestroy(): void {
		this.subscribers.forEach(each => each.unsubscribe());
	}

	private initTable(): void {
		const labels = ['Detail', 'Edit', 'Delete'];
		const icons = ['preview', 'edit', 'remove_circle'];
		const colors = ['primary', 'primary', 'accent'];
		const actions = ['detail', 'edit', 'delete'];
		const type = ['flat', 'stroked', 'flat'];

		this.table = new TableModel();
		this.table.labels = UserTableLabelConst;
		this.table.columns = UserTableColumnConst;
		this.table.actions = labels.reduce((result, each, index) => {
			const action = new TableActionModel();

			action.label = each;
			action.icon = icons[index];
			action.color = colors[index];
			action.action = actions[index];
			action.type = type[index];

			result.push(action);
			return result;
		}, []);
	}

	private getViewListService(): void {
		this.isLoading = true;

		const url =
			UserServicePathConst +
			'?page=' +
			this.table.page +
			'&limit=' +
			this.table.pageSize;

		const subs = this.baseService
			.getDataPaging(url, UserModel)
			.subscribe(resp => {
				if (resp) {
					this.table.totalData = resp.total;
					this.table.dataSource.data = resp.data;
				}

				this.isLoading = false;
			});

		this.subscribers.push(subs);
	}

	public updateSearch(onInputSearch: string): void {
		if (!onInputSearch) {
			return;
		}

		this.getViewListService();
	}

	public updatePage(event: any): void {
		this.table.setPageSize(event.pageSize);
		this.table.setPage(event.pageIndex + 1);

		this.getViewListService();
	}

	public onClickButton(clickBtn: any): void {
		if (!clickBtn) {
			return;
		}

		if (clickBtn.action === 'detail') {
			console.log('--- Trigger Detail Page Here ---', clickBtn);
		} else if (clickBtn.action === 'edit') {
			this.navigateToEdit(clickBtn.row);
		} else if (clickBtn.action === 'delete') {
			this.openConfirmationDialog(clickBtn.row);
		}
	}

	public openConfirmationDialog(user: UserModel) {
		const confirmation = new ConfirmationModel();
		confirmation.title = 'Remove Data?';
		confirmation.content = 'Are you sure you want to remove this data?';
		confirmation.btnCancel = 'Cancel';
		confirmation.btnSubmit = 'Remove';

		const subs = this.dialog
			.open(ConfirmationComponent, {
				autoFocus: false,
				data: {
					confirmation: confirmation,
				},
			})
			.afterClosed()
			.subscribe(resp => {
				if (resp) {
					console.log(
						'--- Trigger Delete Data Service Here ---',
						user
					);
				}
			});

		this.subscribers.push(subs);
	}

	public navigateTo(): void {
		this.router.navigate(['ui']);
	}

	public navigateToAdd(): void {
		this.router.navigate(['add'], {
			relativeTo: this.activatedRoute,
		});
	}

	public navigateToEdit(user: UserModel): void {
		this.router.navigate(['edit', user.id], {
			relativeTo: this.activatedRoute,
		});
	}
}
