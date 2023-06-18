import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IconDefinition, faBars } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  @Input() icon!: IconDefinition;
  @Input() menu!: boolean;
  @Output() menuChange = new EventEmitter<boolean>();
  // faBars = faBars;
  toggleMenu() {
    this.menu = !this.menu;
    this.menuChange.emit(this.menu);
  }
}
