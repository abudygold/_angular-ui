import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BaseOptionModel } from '../../../../core/model';
import { FormInputModel } from '../shared/model';

@Component({
	selector: 'app-select-option',
	templateUrl: './select-option.component.html',
	styleUrls: ['./select-option.component.scss'],
})
export class SelectOptionComponent implements OnInit {
	@Input()
	public formInput: FormInputModel;

	@Input()
	public control: FormControl;

	@Input()
	public optionList: BaseOptionModel[] | any[];

	constructor() {}

	ngOnInit(): void {}
}
