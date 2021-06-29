import { NgModule } from '@angular/core';
import { InputCurrencyDirective } from './input-currency';
import {
	InputDecimalDirective,
	InputNumberDirective,
	InputQuantityDirective,
} from './number';
import { OnlyNumberDirective } from './only-number';

@NgModule({
	declarations: [
		InputCurrencyDirective,
		InputDecimalDirective,
		InputNumberDirective,
		InputQuantityDirective,
		OnlyNumberDirective,
	],
	exports: [
		InputCurrencyDirective,
		InputDecimalDirective,
		InputNumberDirective,
		InputQuantityDirective,
		OnlyNumberDirective,
	],
})
export class FormatInputModule {}
