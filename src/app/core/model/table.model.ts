import { MatTableDataSource } from '@angular/material/table';
import { TableActionModel } from './table-action.model';

export class TableModel<T = any> {
	public dataSource: MatTableDataSource<T>;
	public columns: any[];
	public labels: string[];
	public page: number;
	public pageSize: number;
	public totalData: number;
	public actions: TableActionModel[];
	public isSequence: boolean;
	public isPagination: boolean;

	constructor() {
		this.dataSource = new MatTableDataSource([]);
		this.columns = [];
		this.labels = [];
		this.page = 1;
		this.pageSize = 10;
		this.totalData = 0;
		this.actions = [];
		this.isSequence = true;
		this.isPagination = true;
	}

	public getNumber(index: number): string {
		let next = null;

		if (this.page > 1) {
			next = this.pageSize * (this.page - 1) + (index + 1);
		} else {
			next = index + 1;
		}

		return `${next}`;
	}

	public getPageIndex(): number {
		return this.page - 1;
	}

	public isEmpty(): boolean {
		return this.totalData === 0;
	}

	public setPage(page: number) {
		this.page = page;
	}

	public setPageSize(size: number) {
		this.pageSize = size;
	}

	public resetPage() {
		this.page = 1;
	}
}
