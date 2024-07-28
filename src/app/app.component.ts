import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

displayText = false;
 text = "ney gars";

onClickBtn(): void {
this.displayText = this.displayText ? false : true
}

}
