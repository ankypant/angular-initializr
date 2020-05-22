import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '@core/services/auth/auth.service';
import { ErrorhandlingService } from '@core/services/error-handling/error-handling.service';
import { UserDetails, AuthDetails } from '@core/services/auth/auth.interface';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
	public loginForm = this.formBuilder.group({
		username: ['', Validators.required],
		password: ['', Validators.required],
	});
	constructor(
		public authService: AuthService,
		private errorhandlingService: ErrorhandlingService,
		private formBuilder: FormBuilder,
		private router: Router
	) {}

	ngOnInit(): void {
		this.fillDummyFormValues();
	}

	/**
	 * Calls login in AuthService if the form is valid
	 */
	public login() {
		if (this.loginForm.invalid) {
			this.errorhandlingService.showError('Please enter all the details', null);
			return;
		}
		const authDetails: AuthDetails = {
			username: this.loginForm.get('username').value,
			password: this.loginForm.get('password').value,
		};
		this.authService.login(authDetails).subscribe(
			(userDetails: UserDetails) => {
				this.router.navigateByUrl('home');
			},
			error => {
				this.errorhandlingService.showError(
					'Some error occured while login in',
					error
				);
			}
		);
	}

	/**
	 *  Fills the login form with dummy data
	 */
	private fillDummyFormValues() {
		this.loginForm.patchValue({
			username: 'ankitpant',
			password: 'dummyPassword#1',
		});
	}
}
