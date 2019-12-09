import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

/** Interfaces */
import { LoginModel } from './interfaces/login.model';
import { FeedbackLoginModel } from './interfaces/feedback.model';
import { UsersService } from 'src/app/core/users/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  /** Form */
  public loginForm: FormGroup;

  /** Login Access (Fake) */
  private loginAccess: string = 'admin';

  /** Password Access (Fake) */
  private passwordAccess: string = 'jesuisunadmin';

  /** Feedback */
  public feedback: FeedbackLoginModel = {
    feedback: `Le nom d'utilisateur ou le mot de passe est incorrect.`,
    active: false
  };

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private usersService: UsersService
  ) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      login: ['admin', Validators.required],
      password: ['jesuisunadmin', [Validators.required, Validators.minLength(6)]]
    });

    this.loginForm.controls.password.valueChanges.subscribe((value: string) => {
      if (this.feedback.active) {
        this.feedback.active = false;
      }
    });
  }

  onSubmit(): void {
    const formRawValue: LoginModel = this.loginForm.getRawValue();
    const login: string = formRawValue.login;
    const password: string = formRawValue.password;
    if (login === this.loginAccess && password === this.passwordAccess) {
      this.feedback.active = false;
      this.usersService.isLogged$.next(true);
      this.router.navigate(['home']);
    } else {
      this.usersService.isLogged$.next(false);
      this.feedback.active = true;
    }
  }

  onErrorButton(): void {
    const test: Element = document.getElementsByClassName('test')[0];
    test.innerHTML = 'ok';
  }

}
