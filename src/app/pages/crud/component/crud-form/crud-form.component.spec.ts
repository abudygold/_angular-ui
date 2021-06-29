import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CRUDFormComponent } from './crud-form.component';

describe('CRUDFormComponent', () => {
	let component: CRUDFormComponent;
	let fixture: ComponentFixture<CRUDFormComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [CRUDFormComponent],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(CRUDFormComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
