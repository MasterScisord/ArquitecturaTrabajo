import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OlvidecontraPage } from './olvidecontra.page';

describe('OlvidecontraPage', () => {
  let component: OlvidecontraPage;
  let fixture: ComponentFixture<OlvidecontraPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(OlvidecontraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
