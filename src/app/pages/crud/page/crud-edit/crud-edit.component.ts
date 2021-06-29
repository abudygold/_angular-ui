import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { BaseService } from '../../../../core/base-service/service';
import { UserServicePathConst } from '../../shared/const';
import { UserModel } from '../../shared/model';

@Component({
	selector: 'app-crud-edit',
	templateUrl: './crud-edit.component.html',
	styleUrls: ['./crud-edit.component.scss'],
})
export class CRUDEditComponent implements OnInit, OnDestroy {
	private id: string;
	private subscribers: Subscription[];

	public isLoading: boolean;
	public user: UserModel;

	constructor(
		private router: Router,
		private activatedRoute: ActivatedRoute,
		private baseService: BaseService
	) {}

	ngOnInit(): void {
		this.id = this.activatedRoute.snapshot.params.id;
		this.isLoading = false;
		this.subscribers = [];

		this.user = new UserModel();

		this.getDetailService();
	}

	ngOnDestroy(): void {
		this.subscribers.forEach(each => each.unsubscribe());
	}

	private getDetailService(): void {
		this.isLoading = true;

		const subs = this.baseService
			.getData(UserServicePathConst + '/' + this.id, UserModel)
			.subscribe(resp => {
				if (resp) {
					this.user = resp;
				}

				this.isLoading = false;
			});

		this.subscribers.push(subs);
	}

	public formSubmit(form: any): void {
		console.log(form);
	}

	public navigateTo(): void {
		this.router.navigate(['ui/crud']);
	}
}
