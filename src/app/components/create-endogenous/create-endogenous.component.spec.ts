import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEndogenousComponent } from './create-endogenous.component';

describe('CreateEndogenousComponent', () => {
  let component: CreateEndogenousComponent;
  let fixture: ComponentFixture<CreateEndogenousComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateEndogenousComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateEndogenousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
