import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-homepage',
	templateUrl: './homepage.component.html',
	styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit {
	public navigation: any[];

	constructor(private router: Router) {}

	ngOnInit(): void {
		this.setNavigation();
	}

	public setNavigation(): void {
		this.navigation = [
			{
				name: 'CRUD',
				title: 'Example CRUD',
				path: 'ui/crud',
			},
			{
				name: 'Coming Soon',
				title: 'Coming Soon',
				path: '#',
			},
		];
	}

	public navigateTo(url: string): void {
		this.router.navigate([url]);
	}
}
