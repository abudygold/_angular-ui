import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BaseOptionModel } from '../../../../core/model';

@Component({
	selector: 'app-radio-button',
	templateUrl: './radio-button.component.html',
	styleUrls: ['./radio-button.component.scss'],
})
export class RadioButtonComponent implements OnInit {
	@Input()
	public optionList: BaseOptionModel[];

	@Input()
	public control: FormControl;

	@Input()
	public isFlex: boolean;

	constructor() {}

	ngOnInit(): void {}
}
