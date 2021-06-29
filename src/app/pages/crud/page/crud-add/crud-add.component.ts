import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-crud-add',
	templateUrl: './crud-add.component.html',
	styleUrls: ['./crud-add.component.scss'],
})
export class CRUDAddComponent implements OnInit {
	constructor(private router: Router) {}

	ngOnInit(): void {}

	public formSubmit(form: any): void {
		console.log(form);
	}

	public navigateTo(): void {
		this.router.navigate(['ui/crud']);
	}
}
