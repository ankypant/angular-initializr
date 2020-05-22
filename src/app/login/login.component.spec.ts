import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { TestingModule } from '@utils/testing.module';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TestingModule],
      declarations: [LoginComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should test snapshot of LoginComponent', () => {
    expect(LoginComponent).toMatchSnapshot();
  });

  it('should initialize login form', () => {
    component.ngOnInit();
    expect(component.loginForm.get('username').value).not.toBeNull();
    expect(component.loginForm.get('password').value).not.toBeNull();
  });

  it('should validate login form', () => {
    component.loginForm.patchValue({
      username: null,
      password: null,
    });
    expect(component.loginForm.valid).toBeFalsy();
  });
});
