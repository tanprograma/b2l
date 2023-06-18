import { Component } from '@angular/core';
import {
  faArrowLeft,
  faAngleRight,
  faHouse,
} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-add-biltil',
  templateUrl: './add-biltil.component.html',
  styleUrls: ['./add-biltil.component.css'],
})
export class AddBiltilComponent {
  faArrowLeft = faArrowLeft;
  faAngleRight = faAngleRight;
  loading: boolean = false;
  faHouse = faHouse;
  view: any = {
    endogenous: false,
    exogenous: true,
  };
  setView() {
    this.view.exogenous = !this.view.exogenous;
    this.view.endogenous = !this.view.endogenous;
  }

  back() {
    this.view.add = true;
    this.view.endogenous = false;
    this.view.exogenous = false;
  }
}
