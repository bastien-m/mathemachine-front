import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComputationComponent } from './computation.component';

describe('ComputationComponent', () => {
  let component: ComputationComponent;
  let fixture: ComponentFixture<ComputationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComputationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComputationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
