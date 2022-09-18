import { Component, OnInit, Input, AfterViewInit } from '@angular/core';

@Component({
	selector: 'app-button',
	templateUrl: './button.component.html',
	styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit, AfterViewInit {

	@Input() _buttonProps!: any;
	@Input() _function!:any;
	constructor() { }

	ngOnInit(): void {
		console.log(this._buttonProps)
	}

	ngAfterViewInit(): void {
	}

}
