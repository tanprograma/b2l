import { Component, Input } from '@angular/core';
import { Biltil } from 'src/app/biltil';
import { faLink } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  @Input() resource!: Biltil;
  faLink = faLink;
  getDateString(date: number) {
    return new Date(date).toDateString();
  }
}
