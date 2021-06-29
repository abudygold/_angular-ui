import {
	Component,
	EventEmitter,
	Input,
	OnDestroy,
	OnInit,
	Output,
	ViewChild,
} from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { Subscription } from 'rxjs';
import { TableModel } from '../../../../core/model';

@Component({
	selector: 'app-table',
	templateUrl: './table.component.html',
	styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit, OnDestroy {
	@ViewChild(MatSort, { static: false })
	public matSort: MatSort;

	private subscribers: Subscription[];

	public displayColumns: string[];

	@Input()
	public table: TableModel;

	@Output()
	public clickButton: EventEmitter<any>;

	@Output()
	public updatePage: EventEmitter<any>;

	constructor() {
		this.clickButton = new EventEmitter(null);
		this.updatePage = new EventEmitter(null);
	}

	ngOnInit() {
		this.subscribers = [];
		this.setDisplayColumn();
	}

	ngOnDestroy() {
		this.subscribers.forEach(each => each.unsubscribe());
	}

	public sort() {
		this.table.dataSource.sort = this.matSort;
	}

	private setDisplayColumn() {
		this.displayColumns = this.table.columns.reduce((result, each) => {
			result.push(each.value);
			return result;
		}, []);

		if (this.table.isSequence) {
			this.displayColumns = ['no', ...this.displayColumns];
		}
		if (this.table.actions) {
			this.displayColumns = [...this.displayColumns, 'actions'];
		}
	}

	public pageIndex(event: any) {
		this.updatePage.emit(event);
	}

	public onClickButton(row: any, action: any) {
		if (!row) {
			return;
		}

		this.clickButton.emit({
			row: row,
			action: action,
		});
	}
}
