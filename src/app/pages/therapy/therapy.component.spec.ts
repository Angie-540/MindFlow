import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TherapyComponent } from './therapy.component';

describe('TherapyComponent', () => {
  let component: TherapyComponent;
  let fixture: ComponentFixture<TherapyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TherapyComponent]
    });
    fixture = TestBed.createComponent(TherapyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
