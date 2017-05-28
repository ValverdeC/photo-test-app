import { Component, Inject, OnInit } from '@angular/core';
import { MD_DIALOG_DATA } from '@angular/material';

import { ICollection } from '../collection';

@Component({
  templateUrl: './photo-dialog-overview.component.html',
  styleUrls: ['./photo-dialog-overview.component.css']
})
export class PhotoDialogOverviewComponent implements OnInit {

	photo: any;
	loading = true;
	img: any;

	constructor(@Inject(MD_DIALOG_DATA) public data: number) { }
	
	tiles: ICollection[] = [
		{ id: 1, cols: 3, rows: 2, photoUrl: './assets/img/collection/1_popup.jpg'},
		{ id: 2, cols: 3, rows: 2, photoUrl: './assets/img/collection/2_popup.jpg'},
		{ id: 3, cols: 3, rows: 4.5, photoUrl: './assets/img/collection/3_popup.jpg'},
		{ id: 4, cols: 6, rows: 4, photoUrl: './assets/img/collection/4_popup.jpg'},
	];

	ngOnInit() {
		this.photo = this.tiles.find(tile => tile.id === this.data);
	}

	leftClick() {
		this.loading = true;
		this.data > 1 ? this.data-- : this.data = this.tiles.length;
		this.photo = this.tiles.find(tile => tile.id === this.data);
	}

	rightClick() {
		this.loading = true;
		this.data < this.tiles.length ? this.data++ : this.data = 1;
		this.photo = this.tiles.find(tile => tile.id === this.data);
	}

	load() {
		this.loading = false;
	}

}
