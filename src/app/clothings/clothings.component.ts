import { Component, OnInit } from '@angular/core';
import { IClothing } from './clothing';
import { MdDialog, MdDialogRef } from '@angular/material';

import { DetailDialogOverviewComponent } from './detail-dialog-overview/detail-dialog-overview.component';


@Component({
  templateUrl: './clothings.component.html',
  styleUrls: ['./clothings.component.css']
})


export class ClothingsComponent implements OnInit {
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

  openDialog(myClothing) {
    let dialogref = this.dialog.open(DetailDialogOverviewComponent, { data: myClothing});
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