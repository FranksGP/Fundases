import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComprasCreate } from './compras-create';

describe('ComprasCreate', () => {
  let component: ComprasCreate;
  let fixture: ComponentFixture<ComprasCreate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComprasCreate],
    }).compileComponents();

    fixture = TestBed.createComponent(ComprasCreate);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
