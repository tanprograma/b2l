import { Component } from '@angular/core';
import { BiltilService } from 'src/app/services/biltil.service';
import { Biltil } from 'src/app/biltil';
@Component({
  selector: 'app-create-endogenous',
  templateUrl: './create-endogenous.component.html',
  styleUrls: ['./create-endogenous.component.css'],
})
export class CreateEndogenousComponent {
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
