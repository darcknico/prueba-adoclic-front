import { ComponentFixture, TestBed, tick } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router, RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let authService: AuthService;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        RouterModule
      ],
      providers: [AuthService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    authService = fixture.debugElement.injector.get(AuthService);
    router = fixture.debugElement.injector.get(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display error message for invalid form', async () => {
    component.loginForm.get('email')?.setValue('user@demo.com');
    component.loginForm.get('password')?.setValue('12345');
    await component.login();
    fixture.detectChanges();
    expect(component.isLoginError).toEqual(false);
  });

  it('should call login method on form submit', () => {
    spyOn(component, 'login');
    const form = fixture.nativeElement.querySelector('form');
    form.dispatchEvent(new Event('submit'));
    fixture.detectChanges();
    expect(component.login).toHaveBeenCalled();
  });

  it('should redirect on successful login', async () => {
    spyOn(router, 'navigate');
    spyOn(authService, 'login').and.callFake((email,password) => Promise.resolve(true));
    await component.login();
    expect(router.navigate).toHaveBeenCalledWith(['/shopping']);
  });

  it('should handle login error', async () => {
    spyOn(authService, 'login').and.callFake((email,password)=>Promise.resolve(false));
    await component.login();
    expect(component.isLoginError).toEqual(true);
  });
});
