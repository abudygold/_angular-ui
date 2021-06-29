import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CRUDEditComponent } from './crud-edit.component';

describe('CRUDEditComponent', () => {
	let component: CRUDEditComponent;
	let fixture: ComponentFixture<CRUDEditComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [CRUDEditComponent],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(CRUDEditComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
