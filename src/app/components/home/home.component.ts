import { Component, OnInit } from '@angular/core';
import { Biltil } from 'src/app/biltil';
import { BiltilService } from 'src/app/services/biltil.service';
import { faBars, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  faBars = faBars;
  menu: boolean = false;
  faArrowleft = faArrowLeft;
  constructor(private biltilService: BiltilService) {}
  ngOnInit(): void {
    this.getBiltils();
  }
  biltils: Biltil[] = [];
  getBiltils() {
    if (this.biltilService.biltils.length) {
      this.biltils = this.biltilService.biltils;
      return;
    }
    this.biltilService.getBiltils().subscribe((biltils) => {
      this.biltils = biltils;
      this.biltilService.biltils = biltils;
    });
  }
}
