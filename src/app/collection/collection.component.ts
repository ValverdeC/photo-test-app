import { Component, OnInit } from '@angular/core';
import { ICollection } from './collection';

@Component({
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})


export class CollectionComponent implements OnInit {
	imgUrl: string = "./assets/img/shiba.jpg";

  constructor() { }

  ngOnInit() {
  }

  clothings: ICollection[] = [{
  	headerImageUrl: "/assets/img/celia_profile.png",
  	title: "Shiba Inu",
  	subtitle: "Dog Breed",
  	imageUrl: "./assets/img/shiba.jpg",
  	description: "The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan, A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting"
  },
  {
  	headerImageUrl: "/assets/img/celia_profile.png",
  	title: "Shiba Inu",
  	subtitle: "Dog Breed",
  	imageUrl: "./assets/img/shiba.jpg",
  	description: "The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan, A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting"
  },
  {
  	headerImageUrl: "/assets/img/celia_profile.png",
  	title: "Shiba Inu",
  	subtitle: "Dog Breed",
  	imageUrl: "./assets/img/shiba.jpg",
  	description: "The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan, A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting"
  },
  {
  	headerImageUrl: "/assets/img/celia_profile.png",
  	title: "Shiba Inu",
  	subtitle: "Dog Breed",
  	imageUrl: "./assets/img/shiba.jpg",
  	description: "The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan, A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting"
  },
  {
  	headerImageUrl: "/assets/img/celia_profile.png",
  	title: "Shiba Inu",
  	subtitle: "Dog Breed",
  	imageUrl: "./assets/img/shiba.jpg",
  	description: "The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan, A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting"
  },
  {
  	headerImageUrl: "/assets/img/celia_profile.png",
  	title: "Shiba Inu",
  	subtitle: "Dog Breed",
  	imageUrl: "./assets/img/shiba.jpg",
  	description: "The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan, A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting"
  }]

}
