import { Component } from '@angular/core';



@Component({
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})


export class CollectionComponent {
	tiles = [
	    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
	    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
	    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
	    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  	];
}