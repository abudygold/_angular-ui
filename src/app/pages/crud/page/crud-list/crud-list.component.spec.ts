import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CRUDListComponent } from './crud-list.component';

describe('CRUDListComponent', () => {
	let component: CRUDListComponent;
	let fixture: ComponentFixture<CRUDListComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [CRUDListComponent],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(CRUDListComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
