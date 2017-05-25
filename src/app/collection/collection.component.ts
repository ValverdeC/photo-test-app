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

	tiles: ICollection[] = [
	    { id: 1, cols: 3, rows: 2, photoUrl: './assets/img/collection/1.jpg'},
		{ id: 2, cols: 3, rows: 2, photoUrl: './assets/img/collection/2.jpg'},
		{ id: 3, cols: 3, rows: 4.5, photoUrl: './assets/img/collection/3.jpg'},
		{ id: 4, cols: 6, rows: 4, photoUrl: './assets/img/collection/4.jpg'},
  	];

  	tileClick(id: number) {
  		let dialogref = this.dialog.open(PhotoDialogOverviewComponent, { width: '135vh', height: '91.5vh', data: id });
  	}
}
