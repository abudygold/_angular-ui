import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormInputModel } from '../shared/model';

@Component({
	selector: 'app-form-input',
	templateUrl: './form-input.component.html',
	styleUrls: ['./form-input.component.scss'],
})
export class FormInputComponent implements OnInit {
	@Input()
	public formInput: FormInputModel;

	@Input()
	public control: FormControl;

	constructor() {}

	ngOnInit(): void {}
}
