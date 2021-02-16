import { Component, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  setIsClicked: boolean = false;
  collapsed = true;
  @Output() navigateToLink = new EventEmitter<string>();

  navigateTo(featureClicked: string) {
    this.navigateToLink.emit(featureClicked);
  }
}
