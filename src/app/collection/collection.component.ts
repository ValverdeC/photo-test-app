import { Component } from '@angular/core';
import { ICollection } from './collection';

import { MdDialog, MdDialogRef } from '@angular/material';

import { PhotoDialogOverviewComponent } from './photo-dialog-overview/photo-dialog-overview.component';


@Component({
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})


export class CollectionComponent {

	constructor(public dialog: MdDialog) {}

	clothes: ICollection[] = [
	    { id: 1, cols: 3, rows: 1, photoUrl: './assets/img/collection/1.jpg'},
		{ id: 2, cols: 3, rows: 1, photoUrl: './assets/img/collection/2.jpg'},
		{ id: 3, cols: 3, rows: 0, photoUrl: './assets/img/collection/3.jpg'},
		{ id: 4, cols: 6, rows: 1, photoUrl: './assets/img/collection/4.jpg'},
  	];

  	tiles: ICollection[] = [
  		{ id: 1, cols: 50, rows: 0, photoUrl: './assets/img/gallery/preview_xs/DSC_7286-Modifier.jpg' },
  		{ id: 2, cols: 20, rows: 1, photoUrl: './assets/img/gallery/preview_xs/DSC_7325-Modifier.jpg' },
  		{ id: 3, cols: 30, rows: 0, photoUrl: './assets/img/gallery/preview_xs/DSC_7330-Modifier.jpg' },
  		{ id: 4, cols: 100, rows: 0, photoUrl: './assets/img/gallery/preview_xs/DSC_7336-Modifier.jpg' },
  		{ id: 5, cols: 25, rows: 1, photoUrl: './assets/img/gallery/preview_xs/DSC_7353-Modifier.jpg' },
  		{ id: 6, cols: 35, rows: 1, photoUrl: './assets/img/gallery/preview_xs/DSC_7361-Modifier.jpg' },
  		{ id: 7, cols: 40, rows: 0, photoUrl: './assets/img/gallery/preview_xs/DSC_7397-Modifier.jpg' },
  		{ id: 8, cols: 20, rows: 0, photoUrl: './assets/img/gallery/preview_xs/DSC_7436-Modifier.jpg' },
  		{ id: 9, cols: 20, rows: 0, photoUrl: './assets/img/gallery/preview_xs/DSC_7443-Modifier.jpg' },
  		{ id: 10, cols: 25, rows: 1, photoUrl: './assets/img/gallery/preview_xs/DSC_7458-Modifier.jpg' },
  		{ id: 11, cols: 35, rows: 1, photoUrl: './assets/img/gallery/preview_xs/DSC_7480-Modifier.jpg' }
  	];

  	tileClick(id: number) {
  		let dialogref = this.dialog.open(PhotoDialogOverviewComponent, { width: '135vh', height: '91.5vh', data: id });
  	}

  	calculateRow(cols: number, rows: number): number {
  		if(rows === 0) {
  			return cols*1.5;
  		} else {
  			return cols/1.5;
  		}
  	}
}
