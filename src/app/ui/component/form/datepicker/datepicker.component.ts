import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FormInputModel } from '../shared/model';

@Component({
	selector: 'app-datepicker',
	templateUrl: './datepicker.component.html',
	styleUrls: ['./datepicker.component.scss'],
})
export class DatepickerComponent implements OnInit {
	@Input()
	public formInput: FormInputModel;

	@Input()
	public control: FormControl;

	@Input()
	public form: FormGroup;

	constructor() {}

	ngOnInit(): void {}
}
