import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ErrorhandlingService } from '@core/services/error-handling/error-handling.service';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss'],
	providers: [ErrorhandlingService],
})
export class HomeComponent implements OnInit {
	public showLoginStatus = false;
	public userDetails: Observable<any>;
	constructor(public http: HttpClient, private err: ErrorhandlingService) {}

	ngOnInit(): void {}
}
