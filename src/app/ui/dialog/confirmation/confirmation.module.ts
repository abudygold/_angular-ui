import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { ConfirmationComponent } from './confirmation';

@NgModule({
	declarations: [ConfirmationComponent],
	imports: [CommonModule, MatDialogModule, MatButtonModule],
	exports: [ConfirmationComponent],
	entryComponents: [ConfirmationComponent],
})
export class ConfirmationModule {}
