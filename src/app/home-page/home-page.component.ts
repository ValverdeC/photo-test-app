import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {

	volume: string = "Off";
	volumeIcon: string = "volume_off";
	muted: boolean = true;

	volumeOnClick() {
		if(this.volume == "Off") {
			this.volume = "On";
			this.volumeIcon = "volume_up";
			this.muted = false;
		} else {
			this.volume = "Off";
			this.volumeIcon = "volume_off";
			this.muted = true;
		}
	}

	navigationClick() {
		document.getElementById('second-slide').scrollIntoView();
	}

}
