import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MandashboardComponent } from './mandashboard.component';

describe('MandashboardComponent', () => {
  let component: MandashboardComponent;
  let fixture: ComponentFixture<MandashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MandashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MandashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
