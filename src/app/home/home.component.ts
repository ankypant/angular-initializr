import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
	public showLoginStatus = false;
	constructor() {}

	ngOnInit(): void {
		this.firstToLaunch();
	}

	public firstToLaunch() {
		console.log('called');
	}
}
