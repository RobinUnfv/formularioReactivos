import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DinamicPage } from './dinamic-page';

describe('DinamicPage', () => {
  let component: DinamicPage;
  let fixture: ComponentFixture<DinamicPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DinamicPage],
    }).compileComponents();

    fixture = TestBed.createComponent(DinamicPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
