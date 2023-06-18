import { Component } from '@angular/core';
import { BiltilService } from 'src/app/services/biltil.service';
import { Biltil } from 'src/app/biltil';
@Component({
  selector: 'app-create-exogenous',
  templateUrl: './create-exogenous.component.html',
  styleUrls: ['./create-exogenous.component.css'],
})
export class CreateExogenousComponent {
  title: string = '';
  url: string = '';
  created!: Biltil;
  constructor(private biltilService: BiltilService) {}
  create() {
    if (!(this.title.length > 0 && this.title.length > 0)) return;
    this.biltilService
      .createBiltil({ title: this.title, url: this.url })
      .subscribe((biltil) => {
        if (!biltil) return;
        this.created = biltil;
        this.title = '';
        this.url = '';
      });
  }
}
