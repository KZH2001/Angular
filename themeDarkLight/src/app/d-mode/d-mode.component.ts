import { Component } from '@angular/core';

@Component({
  selector: 'app-d-mode',
  templateUrl: './d-mode.component.html',
  styleUrls: ['./d-mode.component.css']
})
export class DModeComponent {
  colorMode = "lightMode"; // Default mode

  constructor() {}

  toggleMode(){
    this.colorMode = this.colorMode === "lightMode" ? "darkMode" : "lightMode";
  }
}
