import { Component, Inject, OnInit } from '@angular/core';
import { MD_DIALOG_DATA } from '@angular/material';

import { IClothesPhoto } from '../clothesphoto';

import { MdDialog, MdDialogRef } from '@angular/material';


@Component({
  templateUrl: './photo-dialog-overview.component.html',
  styleUrls: ['./photo-dialog-overview.component.css']
})
export class PhotoDialogOverviewComponent implements OnInit {

	photo: any;
	loading = true;

	constructor(public dialogRef: MdDialogRef<any>, @Inject(MD_DIALOG_DATA) public data: number) { }
	
	tiles: IClothesPhoto[] = [
		{ id: 1, cols: 1, rows: 1.5, photoUrl: './assets/img/gallery/preview_m/DSC_7443-Modifier.jpg', orientation: 0 },
		{ id: 2, cols: 1, rows: 1.5, photoUrl: './assets/img/gallery/preview_m/DSC_7286-Modifier.jpg', orientation: 0 },
		{ id: 3, cols: 1, rows: 1.5, photoUrl: './assets/img/gallery/preview_m/DSC_7601-Modifier.jpg', orientation: 0 },
		{ id: 4, cols: 1, rows: 1.5, photoUrl: './assets/img/gallery/preview_m/DSC_7796-Modifier.jpg', orientation: 0 },
		{ id: 5, cols: 1, rows: 1.5, photoUrl: './assets/img/gallery/preview_m/DSC_7568-Modifier.jpg', orientation: 0 },
		{ id: 6, cols: 2, rows: 1.5, photoUrl: './assets/img/gallery/preview_xs/DSC_7353-Modifier.jpg', orientation: 1 },
		{ id: 7, cols: 1, rows: 1.5, photoUrl: './assets/img/gallery/preview_xs/DSC_7960-Modifier.jpg', orientation: 0 },
		{ id: 8, cols: 1, rows: 1.5, photoUrl: './assets/img/gallery/preview_xs/DSC_7895-Modifier.jpg', orientation: 0 },
		{ id: 9, cols: 2, rows: 1.5, photoUrl: './assets/img/gallery/preview_xs/DSC_7361-Modifier.jpg', orientation: 1 },
		{ id: 10, cols: 1, rows: 1.5, photoUrl: './assets/img/gallery/preview_xs/DSC_7692-Modifier.jpg', orientation: 0 },
		{ id: 11, cols: 1, rows: 1.5, photoUrl: './assets/img/gallery/preview_xs/DSC_7436-Modifier.jpg', orientation: 0 },
		{ id: 12, cols: 1, rows: 1.5, photoUrl: './assets/img/gallery/preview_xs/DSC_7336-Modifier.jpg', orientation: 0 },
		{ id: 13, cols: 1, rows: 1.5, photoUrl: './assets/img/gallery/preview_xs/DSC_7683-Modifier.jpg', orientation: 0 },
		{ id: 14, cols: 1, rows: 1.5, photoUrl: './assets/img/gallery/preview_xs/DSC_7939-Modifier.jpg', orientation: 0 },
		{ id: 15, cols: 1, rows: 1.5, photoUrl: './assets/img/gallery/preview_xs/DSC_7397-Modifier.jpg', orientation: 0 },
		{ id: 16, cols: 1.5, rows: 1.5, photoUrl: './assets/img/gallery/preview_xs/DSC_7946-Modifier.jpg', orientation: 1 },
		{ id: 17, cols: 1.5, rows: 1.5, photoUrl: './assets/img/gallery/preview_xs/DSC_7458-Modifier.jpg', orientation: 1 },
		{ id: 18, cols: 2, rows: 1.5, photoUrl: './assets/img/gallery/preview_xs/DSC_8008-Modifier.jpg', orientation: 1 },
		{ id: 19, cols: 2, rows: 1.5, photoUrl: './assets/img/gallery/preview_xs/DSC_7967-Modifier.jpg', orientation: 1 },
		{ id: 20, cols: 1, rows: 1.5, photoUrl: './assets/img/gallery/preview_xs/DSC_7519-Modifier.jpg', orientation: 0 },
		{ id: 21, cols: 1, rows: 1.5, photoUrl: './assets/img/gallery/preview_xs/DSC_7330-Modifier.jpg', orientation: 0 },
		{ id: 22, cols: 1, rows: 1.5, photoUrl: './assets/img/gallery/preview_xs/DSC_7641-Modifier.jpg', orientation: 0 },
		{ id: 23, cols: 1, rows: 1.5, photoUrl: './assets/img/gallery/preview_xs/DSC_7918-Modifier.jpg', orientation: 0 },
		{ id: 24, cols: 1, rows: 1.5, photoUrl: './assets/img/gallery/preview_xs/DSC_7480-Modifier.jpg', orientation: 0 },
		{ id: 25, cols: 2, rows: 1.5, photoUrl: './assets/img/gallery/preview_xs/DSC_7325-Modifier.jpg', orientation: 1 },
		{ id: 26, cols: 1, rows: 1.5, photoUrl: './assets/img/gallery/preview_xs/DSC_7755-Modifier.jpg', orientation: 0 },
		{ id: 27, cols: 2, rows: 3, photoUrl: './assets/img/gallery/preview_xs/DSC_8058-Modifier.jpg', orientation: 0 },
		{ id: 28, cols: 2, rows: 3, photoUrl: './assets/img/gallery/preview_xs/DSC_8050-Modifier.jpg', orientation: 0 },
		{ id: 29, cols: 4, rows: 3, photoUrl: './assets/img/gallery/preview_xs/DSC_8055-Modifier.jpg', orientation: 1 }
  	];

	ngOnInit() {
		this.photo = this.tiles.find(tile => tile.id === this.data);
	}

	leftClick() {
		this.loading = true;
		this.data > 1 ? this.data-- : this.data = this.tiles.length;
		this.photo = this.tiles.find(tile => tile.id === this.data);
		this.updateSize();
	}

	rightClick() {
		this.loading = true;
		this.data < this.tiles.length ? this.data++ : this.data = 1;
		this.photo = this.tiles.find(tile => tile.id === this.data);
		this.updateSize();
	}

	load() {
		this.loading = false;
	}

	updateSize() {
		if(this.photo.orientation === 0) {
			this.dialogRef.updateSize('61vh', '91.5vh');
		} else {
			this.dialogRef.updateSize('135vh', '91.5vh');
		}
	}

}
