import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { GenderEnum, TitleEnum } from '../../../../core/enum';
import { BaseOptionModel } from '../../../../core/model';
import { generateEnumOption } from '../../../../core/util';
import {
	UploadJPEGFileConst,
	UploadJPGFileConst,
} from '../../../../ui/component/form/upload-file/shared/const';
import {
	UploadFileExtModel,
	UploadFileModel,
} from '../../../../ui/component/form/upload-file/shared/model';
import { CRUDFormConst } from '../../shared/const';
import { UserModel } from '../../shared/model';

@Component({
	selector: 'app-crud-form',
	templateUrl: './crud-form.component.html',
	styleUrls: ['./crud-form.component.scss'],
})
export class CRUDFormComponent implements OnInit {
	@Input()
	public data: UserModel;

	public formInput: any;
	public form: FormGroup;
	public genderOption: BaseOptionModel[];
	public titleOption: BaseOptionModel[];
	public allowedFileExt: UploadFileExtModel[];

	@Output()
	public formSubmit: EventEmitter<any>;

	constructor() {
		this.formSubmit = new EventEmitter(null);
	}

	ngOnInit(): void {
		this.allowedFileExt = [];
		this.formInput = CRUDFormConst;
		this.genderOption = generateEnumOption(GenderEnum);
		this.titleOption = generateEnumOption(TitleEnum);

		this.initForm();
		this.initData();
		this.initAllowedFileExt();
	}

	private initForm(): void {
		this.form = new FormGroup({
			firstName: new FormControl(null),
			lastName: new FormControl(null),
			dateOfBirth: new FormControl(null),
			gender: new FormControl(null),
			phone: new FormControl(null),
			picture: new FormControl(null),
			title: new FormControl(null),
			/* Range Calendar */
			// start: new FormControl(null),
			// end: new FormControl(null),
		});
	}

	private initData(): void {
		if (!this.data) {
			return;
		}

		this.form.get('firstName').setValue(this.data.firstName);
		this.form.get('lastName').setValue(this.data.lastName);
		this.form.get('dateOfBirth').setValue(this.data.dateOfBirth);
		this.form.get('gender').setValue(this.data.gender);
		this.form.get('phone').setValue(this.data.phone);
		this.form.get('picture').setValue(this.data.picture);
		this.form.get('title').setValue(this.data.title);
	}

	private initAllowedFileExt(): void {
		const fileExt = [UploadJPGFileConst, UploadJPEGFileConst];

		this.allowedFileExt = fileExt.reduce((result, each) => {
			result.push(new UploadFileExtModel().clone(each));
			return result;
		}, []);
	}

	public fileSelected(file: UploadFileModel): void {
		if (file) {
			this.form.get('picture').setValue(file.fileBase64);
		}
	}

	public onSubmit(): void {
		this.formSubmit.emit(this.form.getRawValue());
	}
}
