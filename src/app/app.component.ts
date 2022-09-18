import { Component, Output } from '@angular/core';
import mainAppClass from '../assets/json/mainApp-class.json';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	title = 'Shared-Component';
	_mainAppClass: any = mainAppClass;
	constructor() {

	}

	childFunction() {
		console.log('childFunction')
	}

	childFunction1() {
		console.log('childFunction1')
	}

}
