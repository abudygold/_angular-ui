import {
	Component,
	EventEmitter,
	Input,
	OnInit,
	Output,
	ViewEncapsulation,
} from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
	selector: 'app-search',
	templateUrl: './search.component.html',
	styleUrls: ['./search.component.scss'],
	encapsulation: ViewEncapsulation.None,
})
export class SearchComponent implements OnInit {
	private debounceTime: number;
	private debounceTimer: any;

	public form: FormControl;

	@Input()
	public placeholder: string;

	@Output()
	public searchChange: EventEmitter<any>;

	constructor() {
		this.searchChange = new EventEmitter(null);
	}

	ngOnInit() {
		this.debounceTime = 600;
		this.form = new FormControl(null);
	}

	public onInput() {
		clearTimeout(this.debounceTimer);

		this.debounceTimer = setTimeout(() => {
			this.searchChange.emit(this.form.value);
		}, this.debounceTime);
	}
}
