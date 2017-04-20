import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  display = "none";

  toggleMenu() {
  	this.display = this.display === "block" ? "none" : "block";
  }
}
