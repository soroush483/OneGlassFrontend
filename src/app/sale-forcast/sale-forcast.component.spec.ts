import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleForcastComponent } from './sale-forcast.component';

describe('SaleForcastComponent', () => {
  let component: SaleForcastComponent;
  let fixture: ComponentFixture<SaleForcastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaleForcastComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaleForcastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
