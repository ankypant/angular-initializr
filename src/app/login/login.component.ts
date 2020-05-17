import { Component, OnInit } from '@angular/core';
import { AuthService } from '@core/services/auth/auth.service';
import { ErrorhandlingService } from '@core/services/error-handling/error-handling.service';
import { UserDetails, AuthDetails } from '@core/services/auth/auth.interface';
import { Router } from '@angular/router';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss'],
	providers: [ErrorhandlingService],
})
export class LoginComponent implements OnInit {
	constructor(
		public authService: AuthService,
		private errorhandlingService: ErrorhandlingService,
		private router: Router
	) {}

	ngOnInit(): void {}

	public login() {
		const authDetails: AuthDetails = {
			emailId: 'ankit12.pant@gmail.com',
			password: 'dummyPassword',
		};
		this.authService.login(authDetails).subscribe(
			(userDetails: UserDetails) => {
				console.log(userDetails);
				this.router.navigate(['/home']);
			},
			error => {
				this.errorhandlingService.showError('Not able to login', error);
			}
		);
	}
}
