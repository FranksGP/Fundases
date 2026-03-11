import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComprasDetail } from './compras-detail';

describe('ComprasDetail', () => {
  let component: ComprasDetail;
  let fixture: ComponentFixture<ComprasDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComprasDetail],
    }).compileComponents();

    fixture = TestBed.createComponent(ComprasDetail);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
