import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { SharedModule } from '@shared/shared.module';
import { TestingModule } from '@utils/testing.module';

describe('HomeComponent', () => {
	let component: HomeComponent;
	let fixture: ComponentFixture<HomeComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [SharedModule, TestingModule],
			declarations: [HomeComponent],
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(HomeComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should check if showLoginStatus is false', () => {
		expect(component.showLoginStatus).toBeFalsy();
	});

	it('should call firstToLaunch() after ngOnInit is called', () => {
		const spy = jest.spyOn(component, 'firstToLaunch');
		component.ngOnInit();
		expect(spy).toHaveBeenCalled();
	});

	it('should match the snapshot', () => {
		expect(component).toMatchSnapshot();
	});
});
