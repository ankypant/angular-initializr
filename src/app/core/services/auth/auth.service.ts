import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map, shareReplay, tap } from 'rxjs/operators';
import { UserDetails, AuthDetails } from './auth.interface';

@Injectable({ providedIn: 'root' })
export class AuthService {
	public userDetails$: Observable<UserDetails>;
	public isLoggedIn$: Observable<boolean>;
	private authSubject: BehaviorSubject<UserDetails> = new BehaviorSubject<
		UserDetails
	>(null);

	constructor(private httpClient: HttpClient) {
		this.userDetails$ = this.authSubject.asObservable();
		this.isLoggedIn$ = this.userDetails$.pipe(map(user => !!user));
	}

	public login(authDetails: AuthDetails): Observable<UserDetails> {
		// return this.httpClient
		// 	.post<UserDetails>('http://localhost:3000/auth', authDetails)
		// 	.pipe(
		// 		tap(userDetails => this.authSubject.next(userDetails)),
		// 		shareReplay()
		// 	);
		return this.httpClient
			.get<UserDetails>('http://localhost:3000/userDetails')
			.pipe(
				tap(userDetails => this.authSubject.next(userDetails))
				// shareReplay()
			);
	}

	public logout(): void {
		this.authSubject.next(null);
	}
}
