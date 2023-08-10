import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromotionsAndDiscountsComponent } from './promotions-and-discounts.component';

describe('PromotionsAndDiscountsComponent', () => {
  let component: PromotionsAndDiscountsComponent;
  let fixture: ComponentFixture<PromotionsAndDiscountsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromotionsAndDiscountsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PromotionsAndDiscountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
