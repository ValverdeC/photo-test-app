import { Component } from '@angular/core';



@Component({
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})


export class CollectionComponent {
	tiles = [
	    { cols: 3, rows: 2, photoUrl: './assets/img/gallery_test/IMG_9966.JPG'},
	    { cols: 3, rows: 2, photoUrl: './assets/img/gallery_test/photo0.JPG'},
	    { cols: 3, rows: 4.5, photoUrl: './assets/img/gallery_test/photo1.JPG'},
	    { cols: 6, rows: 4, photoUrl: './assets/img/jabba.jpg'},
  	];
}
