import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';

/** Reactive Forms */
import { ReactiveFormsModule } from '@angular/forms';

/** Router Testing Module */
import { RouterTestingModule } from '@angular/router/testing';

/** Componenents */
import { LoginComponent } from './login.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [ReactiveFormsModule, RouterTestingModule, CommonModule, HttpClientTestingModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    fixture.destroy();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should test login form empty', () => {
    component.loginForm.controls.login.setValue('');
    component.loginForm.controls.password.setValue('');
    expect(component.loginForm.valid).toBeFalsy();
  });

  it('should test input password', () => {
    /** Test password minlength 6 */
    component.loginForm.controls.login.setValue('admin');
    component.loginForm.controls.password.setValue('12345');
    expect(component.loginForm.valid).toBeFalsy();
  });

  it('should test form valid', () => {
    /** Test form valid */
    component.loginForm.controls.login.setValue('admin');
    component.loginForm.controls.password.setValue('jesuisunadmin');
    expect(component.loginForm.valid).toBeTruthy();
  });

  it('should submitting login', () => {
    component.loginForm.controls.login.setValue('admin');
    component.loginForm.controls.password.setValue('jesuisunadmin');
    expect(component.loginForm.valid).toBeTruthy();

    /** Submit form and check boolean active */
    component.onSubmit();
    expect(component.feedback.active).toBeFalsy();
  });
});
