import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileCardComponent } from './mobile-card.component';

describe('MobileCardComponent', () => {
  let component: MobileCardComponent;
  let fixture: ComponentFixture<MobileCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MobileCardComponent]
    });
    fixture = TestBed.createComponent(MobileCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
