import { Component, OnInit } from '@angular/core';
import { IClothing } from './clothing';
import { MdDialog } from '@angular/material';

import { DetailDialogOverviewComponent } from './detail-dialog-overview/detail-dialog-overview.component';


@Component({
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})


export class CollectionComponent implements OnInit {
	clothingChoice = {
    myVar: 'Tous'
  };

  clothingList = [
    'Tous',
    'Par-Dessus',
    'Top',
    'Bas',
    'Robe / Combi',
    'Accessoires'
  ];

  ngOnInit() {
  }

  constructor(public dialog: MdDialog) {}

  openDialog() {
    this.dialog.open(DetailDialogOverviewComponent);
  }

  clothings: IClothing[] = [{
  	headerImageUrl: "./assets/img/celia_profile.png",
  	title: "Shiba Inu",
  	subtitle: "Dog Breed",
  	imageUrl: "./assets/img/shiba.jpg",
  	description: "The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan, A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting",
    type: "Top"
  },
  {
  	headerImageUrl: "./assets/img/celia_profile.png",
  	title: "Shiba Inu",
  	subtitle: "Dog Breed",
  	imageUrl: "./assets/img/shiba.jpg",
  	description: "The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan, A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting",
    type: "Bas"
  },
  {
  	headerImageUrl: "./assets/img/celia_profile.png",
  	title: "Shiba Inu",
  	subtitle: "Dog Breed",
  	imageUrl: "./assets/img/shiba.jpg",
  	description: "The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan, A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting",
    type: "Robe / Combi"
  },
  {
    headerImageUrl: "./assets/img/celia_profile.png",
    title: "Shiba Inu",
    subtitle: "Dog Breed",
    imageUrl: "./assets/img/shiba.jpg",
    description: "The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan, A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting",
    type: "Par-Dessus"
  },
  {
    headerImageUrl: "./assets/img/celia_profile.png",
    title: "Shiba Inu",
    subtitle: "Dog Breed",
    imageUrl: "./assets/img/shiba.jpg",
    description: "The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan, A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting",
    type: "Top"
  },
  {
    headerImageUrl: "./assets/img/celia_profile.png",
    title: "Shiba Inu",
    subtitle: "Dog Breed",
    imageUrl: "./assets/img/shiba.jpg",
    description: "The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan, A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting",
    type: "Bas"
  },
  {
    headerImageUrl: "./assets/img/celia_profile.png",
    title: "Shiba Inu",
    subtitle: "Dog Breed",
    imageUrl: "./assets/img/shiba.jpg",
    description: "The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan, A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting",
    type: "Accessoires"
  },
  {
    headerImageUrl: "./assets/img/celia_profile.png",
    title: "Shiba Inu",
    subtitle: "Dog Breed",
    imageUrl: "./assets/img/shiba.jpg",
    description: "The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan, A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting",
    type: "Top"
  },
  {
    headerImageUrl: "./assets/img/celia_profile.png",
    title: "Shiba Inu",
    subtitle: "Dog Breed",
    imageUrl: "./assets/img/shiba.jpg",
    description: "The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan, A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting",
    type: "Robe / Combi"
  }]

}
