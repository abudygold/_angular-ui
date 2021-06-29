import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ConfirmationModel } from '../shared/model';

@Component({
	selector: 'app-confirmation',
	templateUrl: './confirmation.component.html',
	styleUrls: ['./confirmation.component.scss'],
})
export class ConfirmationComponent implements OnInit {
	public confirmation: ConfirmationModel;

	constructor(
		@Inject(MAT_DIALOG_DATA)
		private data: {
			confirmation: ConfirmationModel;
		},
		private dialogRef: MatDialogRef<ConfirmationComponent>
	) {}

	ngOnInit() {
		this.confirmation = this.data.confirmation;
	}

	public onClose(status: boolean) {
		this.dialogRef.close(status);
	}
}
