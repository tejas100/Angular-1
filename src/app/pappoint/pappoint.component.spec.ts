import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PappointComponent } from './pappoint.component';

describe('PappointComponent', () => {
  let component: PappointComponent;
  let fixture: ComponentFixture<PappointComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PappointComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PappointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
