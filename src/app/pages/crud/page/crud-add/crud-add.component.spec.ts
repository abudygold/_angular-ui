import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CRUDAddComponent } from './crud-add.component';

describe('CrudAddComponent', () => {
	let component: CRUDAddComponent;
	let fixture: ComponentFixture<CRUDAddComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [CRUDAddComponent],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(CRUDAddComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
