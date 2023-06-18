import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBiltilComponent } from './add-biltil.component';

describe('AddBiltilComponent', () => {
  let component: AddBiltilComponent;
  let fixture: ComponentFixture<AddBiltilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddBiltilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddBiltilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
