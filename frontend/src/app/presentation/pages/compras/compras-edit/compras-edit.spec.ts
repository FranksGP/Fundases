import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComprasEdit } from './compras-edit';

describe('ComprasEdit', () => {
  let component: ComprasEdit;
  let fixture: ComponentFixture<ComprasEdit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComprasEdit],
    }).compileComponents();

    fixture = TestBed.createComponent(ComprasEdit);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
