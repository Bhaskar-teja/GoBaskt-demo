import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalOffersComponent } from './local-offers.component';

describe('LocalOffersComponent', () => {
  let component: LocalOffersComponent;
  let fixture: ComponentFixture<LocalOffersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocalOffersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalOffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
