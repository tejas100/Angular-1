import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VappointComponent } from './vappoint.component';

describe('VappointComponent', () => {
  let component: VappointComponent;
  let fixture: ComponentFixture<VappointComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VappointComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VappointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
