import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { FormatInputModule } from '../../directives/format-input/format-input.module';
import { DatepickerComponent } from './datepicker';
import { FormInputComponent } from './form-input';
import { RadioButtonComponent } from './radio-button';
import { SelectOptionComponent } from './select-option';
import { UploadFileComponent } from './upload-file';

@NgModule({
	declarations: [
		FormInputComponent,
		RadioButtonComponent,
		SelectOptionComponent,
		DatepickerComponent,
		UploadFileComponent,
	],
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		MatFormFieldModule,
		MatInputModule,
		MatRadioModule,
		MatSelectModule,
		MatButtonModule,
		MatIconModule,
		MatDatepickerModule,
		FormatInputModule,
	],
	exports: [
		FormInputComponent,
		RadioButtonComponent,
		SelectOptionComponent,
		DatepickerComponent,
		UploadFileComponent,
	],
})
export class FormModule {}
