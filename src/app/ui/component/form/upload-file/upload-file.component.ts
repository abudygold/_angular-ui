import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormInputModel } from '../shared/model';
import { UploadFileExtModel, UploadFileModel } from './shared/model';

@Component({
	selector: 'app-upload-file',
	templateUrl: './upload-file.component.html',
	styleUrls: ['./upload-file.component.scss'],
})
export class UploadFileComponent implements OnInit {
	@Input()
	public allowedFileExt: UploadFileExtModel[];

	@Input()
	public formInput: FormInputModel;

	private fileExt: string[];

	public fileAccept: string;
	public imageData: UploadFileModel;

	@Output()
	public fileSelected: EventEmitter<UploadFileModel>;

	constructor() {
		this.fileSelected = new EventEmitter(null);
	}

	ngOnInit(): void {
		this.imageData = new UploadFileModel();

		this.setFileExt();
		this.setFileAccept();
	}

	private setFileExt(): void {
		this.fileExt = this.allowedFileExt.reduce((result, each) => {
			result.push(each.type);
			return result;
		}, []);
	}

	private setFileAccept(): void {
		const fileAccept = this.allowedFileExt.reduce((result, each) => {
			result.push(each.accept);
			return result;
		}, []);

		this.fileAccept = fileAccept ? [...new Set(fileAccept)].join() : null;
	}

	public openFileUpload(id: string): void {
		document.getElementById(id).click();
	}

	public doUploadImage(event: Event): void {
		const eventTargetFile = (<HTMLInputElement>event.target).files;
		const fileExt = eventTargetFile[0].type.split('/')[1];
		const reader = new FileReader();
		const that = this;

		if (!this.validFileExt(fileExt)) {
			/* Alert File extension is not valid */
			return;
		}

		this.imageData.eventTarget = <HTMLInputElement>event.target;
		this.imageData.fileType = fileExt;
		this.imageData.file = eventTargetFile[0];

		reader.readAsDataURL(eventTargetFile[0]);
		reader.onload = function () {
			that.imageData.fileBase64 = reader.result;
			that.imageData.fileName = eventTargetFile[0].name;

			that.fileSelected.emit(that.imageData);
		};
	}

	private validFileExt(fileType: string): boolean {
		if (this.fileExt.includes(fileType)) {
			return true;
		}

		return false;
	}
}
