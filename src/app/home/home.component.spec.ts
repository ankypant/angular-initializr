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
		Object.defineProperty(window, 'matchMedia', {
			value: jest.fn(() => {
				return { matches: true };
			}),
		});
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
});
